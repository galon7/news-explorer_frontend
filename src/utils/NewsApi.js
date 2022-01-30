export function getNewsFromApi(input, apiKey, from, to, pageSize) {
  return fetch(
    `https://newsapi.org/v2/everything?q=${input}&apiKey=${apiKey}&from=${from}&to=${to}&pageSize=${pageSize}&language=en`
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  });
}
