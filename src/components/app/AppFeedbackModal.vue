<template>
  <div class="text-center pa-4">
    <v-dialog v-model="visible" max-width="400" persistent>
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps"> Open Dialog </v-btn>
      </template>

      <v-card prepend-icon="mdi-map-marker" :text="content" :title="title">
        <template v-slot:actions>
          <v-spacer></v-spacer>
          {{ type }}
          {{ icon }}

          <v-btn @click="feedback.cancel"> {{ cancelButtonText }} </v-btn>

          <v-btn @click="feedback.confirm"> {{ confirmButton }} </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useFeedback } from '@/stores/feedbackStore.js';
import { storeToRefs } from 'pinia';

const feedback = useFeedback();
const { visible, type, title, content, icon, cancelButtonText, confirmButton } =
  storeToRefs(feedback);
</script>
