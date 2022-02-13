import { dateRange } from './FormatDate';
import { getResponseData } from './MainApi';

export const apiKey = 'ea8487c7085543179f251912d0737476';
export const from = dateRange().currentDate;
export const to = dateRange().weekAgoDate;
export const pageSize = 100;

export function getNewsFromApi(input, apiKey, from, to, pageSize) {
  return fetch(
    `https://nomoreparties.co/news/v2/top-headlines?q=${input}&apiKey=${apiKey}&from=${from}&to=${to}&pageSize=${pageSize}&language=en`
  ).then(getResponseData);
}
