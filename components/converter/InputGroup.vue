<template>
  <div class="input-group">
    <v-text-field
      class="input"
      :disabled="disabled"
      type="number"
      :value="inputValue"
      :placeholder="placeholder"
      outlined
      @input="setValue"
    />
    <select v-model="valueProxy">
      <option v-for="option in currenciesList" :key="option.CharCode">
        {{ option.CharCode }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CurrenciesListType } from '~/helpers/types';

export default defineComponent({
  name: 'InputGroup',

  props: {
    value: {
      type: String,
      required: true,
    },

    inputValue: {
      type: String,
      required: true,
    },

    placeholder: {
      type: String,
      required: false,
      default: () => '',
    },

    disabled: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },

  emits: ['custom:updateValue', 'custom:updateInputValue'],

  computed: {
    currenciesList(): CurrenciesListType {
      return this.$store.getters.currenciesList;
    },

    valueProxy: {
      get(): string {
        return this.value;
      },
      set(val: string) {
        this.$emit('custom:updateValue', { charCode: val, name: this.currenciesList[val].Name });
      },
    },
  },

  methods: {
    setValue(val: string) {
      if (/[0-9]/gi.test(val)) {
        this.$emit('custom:updateInputValue', val);
      } else {
        this.$emit('custom:updateInputValue', '');
      }
    },
  },
});
</script>

<style scoped lang="scss">
.input-group {
  display: flex;

  .input {
    font-size: 1.3rem;
    color: black !important;
  }

  select {
    padding: 8px;
    max-height: 56px;
    border: 1px solid gray;
    border-radius: 8px;
    margin-left: 12px;
  }
}
</style>
