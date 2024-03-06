<template>
  <HelloWorld />
  <v-combobox
    label="Combobox"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  ></v-combobox>
</template>

<script>
import { defineComponent } from 'vue'

// Components
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld
  }
})
</script>
