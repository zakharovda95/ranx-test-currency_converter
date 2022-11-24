<template>
  <v-card class="card" min-height="300px" outlined>
    <div class="title">{{ $t('converter.converter') }}</div>
    <div class="content">
      <div class="left">
        <span>{{ $t('converter.enterVal') }}</span>
        <div class="left-group">
          <InputGroup
            :value="converterData.leftData.charCode"
            :input-value="converterData.leftData.value"
            :placeholder="$t('converter.placeholder')"
            @custom:updateValue="setLeftData($event)"
            @custom:updateInputValue="setInputData($event)"
          />
        </div>
        <span>{{ $t('converter.selected') }} {{ $t(converterData.leftData.charCode) }}</span>
      </div>
      <div class="action">
        <v-btn fab dark medium @click="exchange">
          <v-icon large> mdi-arrow-left-right </v-icon>
        </v-btn>
      </div>
      <div class="right">
        <span>{{ $t('converter.result') }}</span>
        <div class="right-group">
          <InputGroup
            :value="converterData.rightData.charCode"
            :input-value="converterData.rightData.value"
            disabled
            @custom:updateValue="setRightData($event)"
          />
        </div>
        <span>{{ $t('converter.selected') }} {{ $t(converterData.rightData.charCode) }}</span>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { mapMutations, mapGetters } from 'vuex';
import InputGroup from '~/components/converter/InputGroup.vue';

export default defineComponent({
  name: 'TheConverter',
  components: { InputGroup },
  computed: {
    ...mapGetters({
      currentCurrency: 'currentCurrency',
      converterData: 'converter',
    }),
  },

  data: () => ({
    reverseValue: false,
  }),

  methods: {
    ...mapMutations({
      setConverterLeftCharCode: 'setConverterLeftCharCode',
      setConverterRightCharCode: 'setConverterRightCharCode',
      setConverterLeftName: 'setConverterLeftName',
      setConverterRightName: 'setConverterRightName',
      setConverterLeftValue: 'setConverterLeftValue',
      setConverterRightData: 'setConverterRightData',
    }),

    exchange() {
      this.reverseValue = !this.reverseValue;
      const leftCharCode = this.converterData.leftData.charCode;
      const rightCharCode = this.converterData.rightData.charCode;
      const leftName = this.converterData.leftData.name;
      const rightName = this.converterData.rightData.name;
      this.setConverterLeftCharCode(rightCharCode);
      this.setConverterRightCharCode(leftCharCode);
      this.setConverterLeftName(rightName);
      this.setConverterRightName(leftName);
      this.setConverterRightData();
    },

    setLeftData(val: { [key: string]: string }) {
      this.setConverterLeftCharCode(val.charCode);
      this.setConverterLeftName(val.name);
      this.setConverterRightData();
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
@media (max-width: 1023px) {
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
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .left,
  .right,
  .action {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .action {
    margin: 24px 0;
  }
}
@media (min-width: 1024px) {
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: 2rem;
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
  }
}
</style>
