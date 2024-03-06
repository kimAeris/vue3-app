import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

const COMMON_ROUTE = [
  '/user/login',
  '/user/login/sso',
  '/user/preferences',
  '/user/auth-request',
  '/user/no-auth',
];

// 사이드메뉴 표시여부를 결정하는 스토어
export const useMenu = defineStore(
  'menu',
  () => {
    const menus = ref([]);
    const mainMenu = ref({});
    const currentPage = ref({});

    const flatMenus = computed(() =>
      menus.value
        .flatMap(({ childList }) => childList)
        .flatMap(({ childList }) => childList),
    );

    //
    const accessibleRoutes = computed(() => {
      let paths = flatMenus.value.map(({ pgm_path_adr }) => pgm_path_adr);

      paths = [...paths, ...COMMON_ROUTE];

      return paths;
    });

    return {
      menus,
      mainMenu,
      flatMenus,
      currentPage,
      accessibleRoutes,
      COMMON_ROUTE,
    };
  },
  {
    //  스토어 내의 모든 상태가 로컬 스토리지에 지속적으로 저장
    persist: true,
  },
);
