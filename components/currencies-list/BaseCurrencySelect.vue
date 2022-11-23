<template>
  <div class="base-currency-select">
    <div class="header">Выберите основную валюту</div>
    <select v-model="currentCurrency" class="select" name="currency-select">
      <option v-for="option in currenciesList" :key="option.ID" class="option">
        {{ option.CharCode }}
        {{ option.Name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { cloneDeep } from 'lodash';

export default defineComponent({
  name: 'BaseCurrencySelect',

  computed: {
    currenciesList() {
      const obj = cloneDeep(this.$store.getters.currenciesList);
      obj.RUB = {
        Name: 'Российский рубль',
        CharCode: 'RUB',
        Value: 1,
      };
      return obj;
    },

    currentCurrency: {
      get() {
        return this.$store.getters.currentCurrency.name;
      },
      set(val) {
        const code = val.slice(0, 3);
        const data = {
          name: this.currenciesList[code].CharCode + ' ' + this.currenciesList[code].Name,
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
