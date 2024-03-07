<template>
  <VDialog v-model="visible" width="auto" persistent>
    <VCard min-width="320px" max-width="400px">
      <VCard
        :color="type"
        height="132px"
        class="d-flex justify-center align-center"
        rounded="0"
      >
        <VIcon VIcon size="x-large" :icon="icon" style="font-size: '112px'">
        </VIcon>
      </VCard>

      <VCardItem class="px-6">
        <VCardTitle> {{ title }} </VCardTitle>
      </VCardItem>

      <VCardText> {{ content }} </VCardText>

      <VCardActions class="justify-end px-6 pt-0">
        <v-btn v-if="cancelButtonText" @click="feedback.cancel">
          {{ cancelButtonText }}
        </v-btn>

        <v-btn
          v-if="confirmButton"
          @click="feedback.confirm"
          class="ml-3"
          :color="confirmButton.type"
        >
          {{ confirmButton }}
        </v-btn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup>
import { useFeedback } from '@/stores/feedbackStore.js';
import { storeToRefs } from 'pinia';

const feedback = useFeedback();
const { visible, type, title, content, icon, cancelButtonText, confirmButton } =
  storeToRefs(feedback);
</script>
