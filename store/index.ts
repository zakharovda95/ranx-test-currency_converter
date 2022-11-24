// eslint-disable-next-line import/named
import { cloneDeep } from 'lodash';
import {
  ConverterType,
  CurrenciesDTO,
  CurrenciesListType,
  CurrentCurrencyType,
  IndexStoreStateType,
} from '~/helpers/types';

import { fetchData } from '~/helpers/requests';

import { converterSchema, currenciesSchema, RUBSchema } from '~/helpers/schemas';

export const state = (): IndexStoreStateType => ({
  isLoading: false,
  lang: 'en',
  currencies: cloneDeep(currenciesSchema),
  converter: cloneDeep(converterSchema),
});

export const mutations = {
  setLang(state: IndexStoreStateType, value: string): void {
    state.lang = value;
  },

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
    list.RUB = cloneDeep(RUBSchema);

    for (const el in list) {
      const item = list[el];
      if (item.Nominal && item.Nominal > 1) {
        item.Value = item.Value / item.Nominal;
        item.Nominal = 1;
      }
    }

    console.log(list);

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
    const leftValue: number = state.currencies.list[state.converter.leftData.charCode].Value;
    const rightValue: number = state.currencies.list[state.converter.rightData.charCode].Value;
    const index: number = leftValue / rightValue;

    state.converter.rightData.value = String((+state.converter.leftData.value * index).toFixed(4));
  },
};

export const actions = {
  async fetchCurrencies({ commit }: any): Promise<void> {
    try {
      commit('setIsLoadingValue', true);
      const res: CurrenciesDTO = await fetchData();
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

  lang(state: IndexStoreStateType): string {
    return state.lang;
  },
};
