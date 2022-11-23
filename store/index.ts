import {
  ConverterType,
  CurrenciesListType,
  CurrentCurrencyType,
  IndexStoreStateType,
} from '~/helpers/types';
import { fetchData } from '~/helpers/requests';

export const state = (): IndexStoreStateType => ({
  isLoading: false,
  currencies: {
    date: '',
    previousDate: '',
    list: {},
    current: {
      name: 'RUB Российский рубль',
      charCode: 'RUB',
      value: '1',
    },
  },
  converter: {
    leftData: {
      name: 'Российский рубль',
      charCode: 'RUB',
      value: '0',
    },
    rightData: {
      name: 'Доллар США',
      charCode: 'USD',
      value: '0',
    },
  },
});

export const mutations = {
  setIsLoadingValue(state: IndexStoreStateType, value: boolean): void {
    state.isLoading = value;
  },

  setCurrenciesDate(state: IndexStoreStateType, date: string): void {
    state.currencies.date = date;
  },

  setCurrenciesPreviousDate(state: IndexStoreStateType, previousDate: string): void {
    state.currencies.previousDate = previousDate;
  },

  setCurrenciesList(state: IndexStoreStateType, list: CurrenciesListType): void {
    state.currencies.list = list;
  },

  setCurrentCurrency(state: IndexStoreStateType, value: CurrentCurrencyType): void {
    state.currencies.current.name = value.name;
    state.currencies.current.charCode = value.charCode;
    state.currencies.current.value = value.value;
  },

  setConverterLeftCharCode(state: IndexStoreStateType, value: string): void {
    state.converter.leftData.charCode = value;
  },

  setConverterRightCharCode(state: IndexStoreStateType, value: string): void {
    state.converter.rightData.charCode = value;
  },

  setConverterLeftName(state: IndexStoreStateType, value: string): void {
    state.converter.leftData.name = value;
  },

  setConverterRightName(state: IndexStoreStateType, value: string): void {
    state.converter.rightData.name = value;
  },

  setConverterLeftValue(state: IndexStoreStateType, value: string): void {
    state.converter.leftData.value = value;
  },

  setConverterRightData(state: IndexStoreStateType) {
    if (state.converter.leftData.charCode === 'RUB') {
      const dataRight = state.currencies.list[state.converter.rightData.charCode];
      state.converter.rightData.value = String(
        (+state.converter.leftData.value / dataRight.Value).toFixed(4),
      );
    } else {
      const leftValue: number = state.currencies.list[state.converter.leftData.charCode].Value;
      const rightValue: number = state.currencies.list[state.converter.rightData.charCode].Value;
      const index: number = leftValue / rightValue;
      state.converter.rightData.value = String(
        (+state.converter.leftData.value * index).toFixed(4),
      );
    }
  },

  setConverterLeftData(state: IndexStoreStateType) {
    if (state.converter.leftData.charCode === 'RUB') {
      const dataRight = state.currencies.list[state.converter.rightData.charCode];
      state.converter.rightData.value = String(
        (+state.converter.leftData.value * dataRight.Value).toFixed(4),
      );
    } else {
      const leftValue: number = state.currencies.list[state.converter.rightData.charCode].Value;
      const rightValue: number = state.currencies.list[state.converter.leftData.charCode].Value;
      const index: number = leftValue / rightValue;
      state.converter.rightData.value = String(
        (+state.converter.leftData.value * index).toFixed(4),
      );
    }
  },
};

export const actions = {
  async fetchCurrencies({ commit }: any): Promise<void> {
    try {
      commit('setIsLoadingValue', true);
      const res = await fetchData();
      if (res) {
        commit('setCurrenciesDate', res.Date);
        commit('setCurrenciesPreviousDate', res.PreviousDate);
        commit('setCurrenciesList', res.Valute);
      }
    } catch (error) {
      console.log(error);
    } finally {
      commit('setIsLoadingValue', false);
    }
  },
};

export const getters = {
  currenciesList(state: IndexStoreStateType): CurrenciesListType {
    return state.currencies.list;
  },

  currentCurrency(state: IndexStoreStateType): CurrentCurrencyType {
    return state.currencies.current;
  },

  converter(state: IndexStoreStateType): ConverterType {
    return state.converter;
  },
};
