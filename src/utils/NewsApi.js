import { NEWS_API_URL, NEWS_API_KEY } from './constants';

export default function search(keyword) {
  const toDate = new Date();
  let fromDate = new Date();
  fromDate.setDate(toDate.getDate() - 7);

  return fetch(`${NEWS_API_URL}?q=${keyword}&from=${fromDate.toISOString()}&to=${toDate.toISOString()}&pageSize=10&apiKey=${NEWS_API_KEY}`)
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    });
};