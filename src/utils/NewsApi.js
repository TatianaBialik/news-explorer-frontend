import { NEWS_API_URL, NEWS_API_KEY } from './constants';

export default function search(keyword) {
  const currDate = new Date();
  const newDate = new Date(currDate.getDate() + 7);
  const from = `${currDate.getFullYear()}-${currDate.getMonth()}-${currDate.getDate()}`;
  const to = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`;
  return fetch(`${NEWS_API_URL}/q=${keyword}&from=${from}&to=${to}&pageSize=100&apiKey=${NEWS_API_KEY}`)
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    });
};