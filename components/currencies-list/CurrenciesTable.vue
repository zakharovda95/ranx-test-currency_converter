<template>
  <v-expansion-panels>
    <CurrenciesTableItem v-for="item in currenciesList" :key="item.ID" :data="item" />
  </v-expansion-panels>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CurrenciesTableItem from '~/components/currencies-list/CurrenciesTableItem.vue';

export default defineComponent({
  name: 'CurrencyTable',

  components: { CurrenciesTableItem },

  computed: {
    currenciesList() {
      return this.$store.getters.currenciesList;
    },
  },
});
</script>
