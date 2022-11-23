<template>
  <v-expansion-panels>
    <CurrencyTableItem v-for="item in currenciesList" :key="item.ID" :data="item" />
  </v-expansion-panels>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CurrencyTableItem from '~/components/currencies-list/CurrencyTableItem.vue';

export default defineComponent({
  name: 'CurrencyTable',

  components: { CurrencyTableItem },

  computed: {
    currenciesList() {
      return this.$store.getters.currenciesList;
    },
  },
});
</script>
