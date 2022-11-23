export interface CurrencyDataType {
  CharCode: string;
  ID?: string;
  Name: string;
  Nominal?: number;
  NumCode?: string;
  Previous?: number;
  Value: number;
}

export interface CurrenciesListType {
  [key: string]: CurrencyDataType;
}

export interface CurrentCurrencyType {
  name: string;
  charCode: string;
  value: string;
}

export interface ConverterType {
  leftData: CurrentCurrencyType;
  rightData: CurrentCurrencyType;
}

export interface IndexStoreStateType {
  isLoading: boolean;
  currencies: {
    date: string;
    previousDate: string;
    list: CurrenciesListType;
    current: CurrentCurrencyType;
  };

  converter: ConverterType;
}

export interface CurrenciesDTO {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: CurrenciesListType;
}
