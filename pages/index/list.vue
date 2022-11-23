<template>
  <div class="list-page">
    <BaseCurrencySelect />
    <div class="header">Список валют</div>
    <CurrenciesTable />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CurrenciesTable from '../../components/currencies-list/CurrenciesTable.vue';
import BaseCurrencySelect from '~/components/currencies-list/BaseCurrencySelect.vue';

export default defineComponent({
  components: { BaseCurrencySelect, CurrenciesTable },
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
