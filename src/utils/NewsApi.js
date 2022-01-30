export function getNewsFromApi(q, apiKey, from, to, pageSize) {
  return fetch(
    `https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}&from=${from}&to=${to}&pageSize=${pageSize}`
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  });
}