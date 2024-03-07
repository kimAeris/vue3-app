<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <AppFeedbackModal />
    <AppToast />
  </v-app>
</template>

<script setup>
import AppFeedbackModal from '@components/app/AppFeedbackModal.vue';
import AppToast from '@components/app/AppToast.vue';
</script>
