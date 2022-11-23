<template>
  <div class="base-currency-select">
    <div class="header">{{ $t('chooseBaseCurrency') }}</div>
    <select v-model="currentCurrency" class="select" name="currency-select">
      <option disabled value="">{{ $t('chooseBaseCurrency') }}</option>
      <option
        :key="option.ID"
        v-for="option in currenciesList"
        selected
        :value="option.CharCode"
        class="option"
      >
        {{ option.CharCode }} {{ $t(option.CharCode) }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line import/named
import { cloneDeep } from 'lodash';
import { CurrentCurrencyType } from '~/helpers/types';

export default defineComponent({
  name: 'BaseCurrencySelect',

  computed: {
    currenciesList() {
      return cloneDeep(this.$store.getters.currenciesList);
    },

    currentCurrency: {
      get() {
        return this.$store.getters.currentCurrency.name;
      },
      set(val: string) {
        const code: string = val.slice(0, 3);
        const data: CurrentCurrencyType = {
          name: val,
          charCode: this.currenciesList[code].CharCode,
          value: this.currenciesList[code].Value,
        };
        this.$store.commit('setCurrentCurrency', data);
      },
    },
  },
});
</script>

<style scoped lang="scss">
.base-currency-select {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    text-align: center;
    font-size: 2.1rem;
    margin: 24px 0;
  }
  .select {
    width: 240px;
    padding: 12px;
    border: 1px solid black;
    border-radius: 4px;

    .option {
      width: 240px;
      padding: 8px;
    }
  }
}
</style>
