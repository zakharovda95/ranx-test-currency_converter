<template>
  <div class="app-container">
    <div v-if="$store.state.isLoading" class="loading">{{ $t('loading') }}</div>
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

  computed: {
    lang() {
      return this.$store.getters.lang;
    },
  },

  beforeMount() {
    const el = localStorage.getItem('lang');
    if (el === 'en' || el === 'ru') {
      this.$i18n.locale = el;
    }
  },

  watch: {
    lang: {
      deep: true,
      immediate: true,
      handler() {
        this.$i18n.locale = this.lang;
      },
    },
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

.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.theme--light.v-input--is-disabled input,
.theme--light.v-input--is-disabled textarea {
  color: brown !important;
}
</style>
