import { ref } from 'vue';
import { defineStore } from 'pinia';

// 토스트알림에 대한 정보를 담은 스토어
export const useToast = defineStore('toast', () => {
  const visible = ref(false);
  const type = ref(null);
  const message = ref(null);
  const timeout = ref(4000);

  const newToast = (newMessage, newType) => {
    visible.value = true;
    type.value = newType;
    message.value = newMessage;

    // timeout 속성이 변해야 VSnackbar의 timeout이 초기화 되기 때문에 추가한 로직
    if (setTimeout.value < 4100) {
      setTimeout.value++;
    } else {
      timeout.value = 4000;
    }
  };

  return {
    visible,
    type,
    message,
    timeout,
    newToast,
  };
});
