<template>
  <v-card min-height="300px" outlined>
    <div class="title">Конвертер валют</div>
    <div class="content">
      <div class="left">
        <span>Введите значение для ковертации</span>
        <div class="left-group">
          <ConverterCurrencySelect
            :value="converterData.leftData.charCode"
            :input-value="converterData.leftData.value"
            placeholder="Введите значение"
            @custom:updateValue="setLeftData($event)"
            @custom:updateInputValue="setInputData($event)"
          />
        </div>
        <span>Выбрано: {{ converterData.leftData.name }}</span>
      </div>
      <div class="action">
        <v-btn fab dark medium @click="reverseValue = !reverseValue">
          <v-icon large> mdi-arrow-left-right </v-icon>
        </v-btn>
      </div>
      <div class="right">
        <span>Результат</span>
        <div class="right-group">
          <ConverterCurrencySelect
            :value="converterData.rightData.charCode"
            :input-value="converterData.rightData.value"
            disabled
            @custom:updateValue="setRightData($event)"
          />
        </div>
        <span>Выбрано: {{ converterData.rightData.name }}</span>
      </div>
    </div>
    {{ converterData }}
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { mapMutations, mapGetters } from 'vuex';

import ConverterCurrencySelect from '~/components/converter/ConverterCurrencySelect.vue';

export default defineComponent({
  name: 'TheConverter',
  components: { ConverterCurrencySelect },

  computed: {
    ...mapGetters({
      currentCurrency: 'currentCurrency',
      converterData: 'converter',
    }),
  },

  data: () => ({
    reverseValue: false,
  }),

  watch: {
    reverseValue: {
      deep: true,
      immediate: true,
      handler() {
        if (this.reverseValue) {
          this.setConverterLeftData();
        } else {
          this.setConverterRightData();
        }
      },
    },
  },

  methods: {
    ...mapMutations({
      setConverterLeftCharCode: 'setConverterLeftCharCode',
      setConverterRightCharCode: 'setConverterRightCharCode',
      setConverterLeftName: 'setConverterLeftName',
      setConverterRightName: 'setConverterRightName',
      setConverterLeftValue: 'setConverterLeftValue',
      setConverterRightData: 'setConverterRightData',
      setConverterLeftData: 'setConverterLeftData',
    }),

    setLeftData(val: { [key: string]: string }) {
      this.setConverterLeftCharCode(val.charCode);
      this.setConverterLeftName(val.name);
      this.setConverterLeftData();
    },

    setRightData(val: { [key: string]: string }) {
      this.setConverterRightCharCode(val.charCode);
      this.setConverterRightName(val.name);
      this.setConverterRightData();
    },

    setInputData(val: string) {
      this.setConverterLeftValue(val);
      this.setConverterRightData();
    },
  },
});
</script>

<style scoped lang="scss">
.title {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin: 12px 0;
}
.content {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.left,
.right,
.action {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
