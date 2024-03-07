<template>
  <v-btn @click="openDialog()"> Open Dialog </v-btn>
  <v-btn @click="openToast()"> Open Toast </v-btn>
  <HelloWorld />
</template>

<script setup>
// Components
import HelloWorld from '../components/HelloWorld.vue';

import { useFeedback } from '@stores/feedbackStore.js';
import { useToast } from '@stores/toastStore.js';

const { openFeedback } = useFeedback();
const { newToast } = useToast();

const openDialog = async () => {
  const confirm = await openFeedback(
    'primary',
    '로그아웃',
    '로그아웃 하시겠습니까?',
    '취소',
    '로그아웃',
  );
  if (!confirm) {
    return;
  }

  console.log('확인버튼 실행');
};

const openToast = () => {
  newToast('공장을 선택해주세요', 'warning');
};
</script>
