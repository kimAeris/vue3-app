<template>
  <v-snackbar
    v-model="visible"
    :timeout="timeout"
    color="blue-grey"
    rounded="pill"
    variant="tonal"
    class="mb-6"
  >
    <VIcon :icon="getFeedbackIcon('primary')" class="mr-2" />
    {{ message }}
  </v-snackbar>
</template>

<script setup>
import { useToast } from '@stores/toastStore.js';
import { storeToRefs } from 'pinia';
import { getFeedbackIcon } from '@/utils/common';

const { visible, type, message, timeout } = storeToRefs(useToast());
</script>
