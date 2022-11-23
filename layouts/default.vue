<template>
  <div>
    <TheNavbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheNavbar from '../components/layouts/TheNavbar.vue';

export default defineComponent({
  components: {
    TheNavbar,
  },
});
</script>
