<template>
  <div class="list-page">
    <BaseCurrencySelect />
    <div v-if="isBaseCurrencySelected">
      <div class="header">{{ $t('currencyListTitle') }}</div>
      <CurrencyTable />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import BaseCurrencySelect from '~/components/currencies-list/BaseCurrencySelect.vue';
import CurrencyTable from '~/components/currencies-list/CurrencyTable.vue';

export default defineComponent({
  components: { CurrencyTable, BaseCurrencySelect },

  computed: {
    isBaseCurrencySelected(): boolean {
      return !!this.$store.state.currencies.current.charCode;
    },
  },
});
</script>

<style scoped lang="scss">
.list-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  .header {
    font-size: 2.1rem;
    margin: 24px 0;
  }
}
</style>
