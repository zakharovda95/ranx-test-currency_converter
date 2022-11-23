<template>
  <div class="app-container">
    <div v-if="$store.state.isLoading" class="loading" />
    <Nuxt v-else />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import { defineComponent } from 'vue';

export default defineComponent({
  asyncData({ store }: Context): void {
    store.dispatch('fetchCurrencies');
  },
});
</script>

<style lang="scss">
@media (max-width: 1023px) {
  .app-container {
    width: 90%;
    margin: 0 auto;
  }
}
@media (min-width: 1024px) {
  .app-container {
    width: 60%;
    margin: 0 auto;
  }
}

.theme--light.v-input--is-disabled input,
.theme--light.v-input--is-disabled textarea {
  color: brown !important;
}
</style>
