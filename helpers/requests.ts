import axios from 'axios';

export async function fetchData() {
  const res = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
  return res.data;
}
