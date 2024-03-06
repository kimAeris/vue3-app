import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// 유저 설정 정보를 담은 스토어
export const useUser = defineStore(
  'user',
  () => {
    const accessToken = ref();
    const user = ref({});
    const shop = ref();

    const userSetInfo = computed(() => ({
      lang_cd: user.value?.lang_cd,
      shop_cd: shop.value?.shop_cd,
      user_id: user.value?.user_id,
    }));

    const langCd = computed(() => user.value?.lang_cd);

    return {
      accessToken,
      user,
      shop,
      userSetInfo,
      langCd,
    };
  },
  {
    //  스토어(store)의 상태(state) 중 일부를 로컬 스토리지(local storage)에 지속적으로 저장
    persist: {
      paths: ['user', 'shop'],
    },
  },
);
