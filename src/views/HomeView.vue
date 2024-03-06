<template>
  <v-btn @click="btnClick()"> Open Dialog </v-btn>
  <HelloWorld />
</template>

<script setup>
// Components
import HelloWorld from '../components/HelloWorld.vue';

import { useFeedback } from '@stores/feedbackStore.js';

const { openFeedback } = useFeedback();

const btnClick = async () => {
  await openFeedback('primary', 'test', 'test1', 'test2', 'text3');
};
</script>
