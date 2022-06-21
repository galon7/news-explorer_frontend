const BASE_URL = 'https://news-explorer-api-galon7.vercel.app/';

export function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
}

export function register(name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, password, email }),
  }).then(getResponseData);
}

export function login(password, email) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(getResponseData);
}

export function checkToken(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(getResponseData);
}

export function getArticles(header) {
  return fetch(`${BASE_URL}/articles`, {
    headers: header,
  }).then(getResponseData);
}

export function changeSavedCardStatus(article, isSaved, header) {
  if (!isSaved) {
    return fetch(`${BASE_URL}/articles`, {
      method: 'POST',
      headers: header,
      body: JSON.stringify(article),
    }).then(getResponseData);
  } else {
    return fetch(`${BASE_URL}/articles/${article}`, {
      method: 'DELETE',
      headers: header,
    }).then(getResponseData);
  }
}
