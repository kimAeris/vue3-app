<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <AppFeedbackModal />
  </v-app>
</template>

<script setup>
import AppFeedbackModal from '@components/app/AppFeedbackModal.vue';
</script>
