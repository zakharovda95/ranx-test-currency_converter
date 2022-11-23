import axios from 'axios';
import { CurrenciesDTO } from '~/helpers/types';

export async function fetchData(): Promise<CurrenciesDTO> {
  const res = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
  return res.data;
}
