<template>
  <v-expansion-panel v-if="!hidden" width="100%" height="60px">
    <v-expansion-panel-header>
      <div class="header-content">
        <span class="code">{{ formattedData.NumCode }}</span>
        <span class="name">{{ formattedData.CharCode }}</span>
        <span class="name">{{ $t(formattedData.CharCode) }}</span>
      </div>
    </v-expansion-panel-header>

    <v-expansion-panel-content>
      <div class="content">
        <div class="left-group">
          <span>{{ leftData.nominal }}</span>
          <span>{{ leftData.charCode }}</span>
        </div>

        <div class="action">
          <v-btn fab dark medium @click="changeReverse">
            <v-icon large> mdi-arrow-left-right </v-icon>
          </v-btn>
        </div>

        <div class="right-group">
          <span>{{ rightData.value }}</span>
          <span>{{ rightData.charCode }}</span>
        </div>
      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CurrencyDataType, CurrentCurrencyType } from '~/helpers/types';

export default defineComponent({
  name: 'CurrencyTableItem',

  props: {
    data: {
      type: Object as PropType<CurrencyDataType>,
      required: true,
    },
  },

  data: (): { [key: string]: any } => ({
    reverseValue: false,
    leftData: {
      nominal: 1,
      charCode: null,
    },
    rightData: {
      value: null,
      charCode: null,
    },
  }),

  computed: {
    hidden(): boolean {
      return this.currentCurrency.charCode === this.formattedData.CharCode;
    },

    currentCurrency(): CurrentCurrencyType {
      return this.$store.getters.currentCurrency;
    },

    formattedData(): CurrencyDataType {
      return this.data;
    },
  },

  watch: {
    currentCurrency: {
      deep: true,
      immediate: true,
      handler() {
        this.calculate();
      },
    },
  },

  methods: {
    changeReverse(): void {
      this.reverseValue = !this.reverseValue;
      this.calculate();
    },

    calculate(): void {
      const currentCurrencyValue: number = +this.currentCurrency.value;
      const convertCurrencyValue: number = this.formattedData.Value;

      if (!this.reverseValue) {
        this.leftData.charCode = this.formattedData.CharCode;
        this.rightData.charCode = this.currentCurrency.charCode;
        this.rightData.value = (convertCurrencyValue / currentCurrencyValue).toFixed(4);
      } else {
        this.leftData.charCode = this.currentCurrency.charCode;
        this.rightData.charCode = this.formattedData.CharCode;
        this.rightData.value = (currentCurrencyValue / convertCurrencyValue).toFixed(4);
      }
    },
  },
});
</script>

<style scoped lang="scss">
@media (max-width: 1023px) {
  .header-content {
    .code {
      position: relative;
      bottom: 10px;
      font-size: 0.7rem;
    }
    .name {
      font-size: 1.3rem;
    }
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .left-group,
    .right-group {
      display: flex;
      justify-content: center;
      font-size: 2rem;
      width: 30%;
    }
    .action {
      display: flex;
      justify-content: center;
      width: 30%;
      margin: 12px 0;
    }
  }
}

@media (min-width: 1024px) {
  .header-content {
    .code {
      position: relative;
      bottom: 10px;
      font-size: 0.7rem;
    }
    .name {
      font-size: 1.3rem;
    }
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .left-group,
    .right-group {
      display: flex;
      justify-content: center;
      font-size: 2rem;
      width: 30%;
    }
    .action {
      display: flex;
      justify-content: center;
      width: 30%;
      margin: 0;
    }
  }
}
</style>
