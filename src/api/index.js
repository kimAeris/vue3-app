import axios from 'axios';
import dayjs from 'dayjs';
import router from '@/routes';
import { useMenu } from '@stores/menuStore.js';
import { useUser } from '@stores/userStore.js';
import { useFeedback } from '@stores/feedbackStore.js';
import { dateFormatting } from '@/utils/days';

const LAST_ACTION_KEY = 'lastAction';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const getMenuCode = () => {
  const menuStore = useMenu();
  return menuStore.currentPage?.menu_cd;
};

const getFeedback = (type, title, message, cancel, confirm) => {
  const { openFeedback } = useFeedback();
  openFeedback(type, title, message, cancel, confirm);
};

const refreshStore = () => {
  const menuStore = useMenu();
  const userStore = useUser();

  userStore.user = {};
  userStore.shop = {};
  menuStore.menus = [];
  menuStore.mainMEnu = {};
  menuStore.currentPage = {};
};

const create = (baseUrl, options) => {
  const instance = axios.create({
    baseUrl,
    ...options,
    widthCredentials: true,
  });

  instance.interceptors.request.use(
    async req => {
      try {
        const userStore = useUser();

        const accessToken = userStore.accessToken;

        const expireTime = dayjs(localStorage.getItem(LAST_ACTION_KEY)).add(
          1,
          'hour',
        );

        // 헤더에 토큰 추가
        req.headers.Authorization = accessToken;

        // 로그인세션 만료 검증
        if (
          // import.meta.env.DEV : 앱이 개발 환경에서 실행 중인지 여부
          // 날짜가 지정한 시간 단위에서 특정 날짜보다 이후 인지, 이후 이거나 같은지 구분
          !import.meta.env.DEV &&
          accessToken &&
          dayjs().isAfter(expireTime)
        ) {
          const res = await axios.post(
            `${BASE_URL}/logout`,
            {
              user_id: userStore.user.user_id,
            },
            {
              headers: {
                Authorization: accessToken,
              },
              withCredentials: true,
            },
          );

          localStorage.removeItem(LAST_ACTION_KEY);
          refreshStore();

          router.push({ name: 'Login' });

          getFeedback(
            'error',
            '로그인 만료',
            '로그인이 만료되었습니다',
            '확인',
          );

          return res;
        }

        // 메뉴코드 추가
        if (
          req.url !== '/system/S3/upload' &&
          req.url !== '/system/S3/download'
        ) {
          const menuCode = getMenuCode();
          if (menuCode) {
            if (req.method === 'get') {
              if (typeof req.params === 'string') {
                req.params = JSON.parse(req.params);
              }

              req.params = {
                ...req.params,
                menu_cd: menuCode,
              };
            }
          } else if (req.method === 'post') {
            if (typeof req.data === 'string') {
              req.data = JSON.parse(req.data);
            }

            req.data = {
              ...req.data,
              menu_cd: menuCode,
            };
          }
        }

        if (accessToken) {
          localStorage.setItem(
            LAST_ACTION_KEY,
            dateFormatting(dayjs(), 'YYYY-MM-DD HH:mm:ss'),
          );
        }

        return req;
      } catch (error) {
        if (import.meta.env.DEV) console.error(error);
      }
    },
    error => Promise.reject(error),
  );

  instance.interceptors.response.use(
    async res => {
      if (res.data?.returnCode === 22) {
        refreshStore();

        router.push({ name: 'Login' });

        getFeedback(
          'error',
          '중복 로그인',
          '다른 곳에서 로그인 되었습니다',
          '확인',
        );

        throw res.data.returnMessage;
      }

      return res;
    },
    async error => {
      if (error.response.status === 401) {
        try {
          const {
            data: { accessToken },
          } = await instance.post(`${BASE_URL}/refreshToken`);

          if (accessToken) {
            const userStore = useUser();
            userStore.accessToken = accessToken;
            return await instance.request(error.config);
          }
        } catch (refreshError) {
          // 개발 환경에서만 refreshError를 콘솔에 기록
          if (import.meta.env.DEV) console.error(refreshError);
          return Promise.reject(refreshError);
        }
      }

      if (error.response.status === 403) {
        refreshStore();

        router.push({ name: 'Login' });

        getFeedback('error', '권한 없음', '접근 권한이 없습니다', '확인');

        return error;
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

export const common = create(`${BASE_URL}`);
