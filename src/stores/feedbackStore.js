import { getFeedbackIcon } from '@/utils/common';
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useFeedback = defineStore('feedback', () => {
  const resolvePromise = ref(null);
  const visible = ref(false);
  const type = ref('info');
  const title = ref(null);
  const content = ref(null);
  const cancelButtonText = ref(null);
  const confirmButton = ref(null);
  const feedbackValue = ref(null);

  const icon = computed(() => getFeedbackIcon(type.value));

  const openFeedback = (
    openType,
    openTitle,
    openContent,
    openCancelBtnText,
    openConfirmBtn,
  ) => {
    type.value = openType;
    title.value = openTitle;
    content.value = openContent;
    cancelButtonText.value = openCancelBtnText;
    confirmButton.value = openConfirmBtn;
    visible.value = true;

    return new Promise((resolve, _) => {
      resolvePromise.value = resolve;
    });
  };

  const confirm = () => {
    visible.value = false;
    resolvePromise.value(true);
  };

  const cancel = () => {
    visible.value = false;
    resolvePromise.value(false);
  };

  return {
    visible,
    type,
    title,
    content,
    cancelButtonText,
    confirmButton,
    feedbackValue,
    icon,
    openFeedback,
    confirm,
    cancel,
  };
});
