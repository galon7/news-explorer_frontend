const BASE_URL = 'https://api.gnews.students.nomoreparties.sbs';

function getResponseData(res) {
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

export function getUserInfo() {
  return fetch(`${this._baseUrl}/users/me`, {
    headers: this._headers,
  }).then(this._getResponseData);
}

export function changeSavedCardStatus(articleId, isSaved) {
  if (isSaved) {
    return fetch(`${BASE_URL}/articles`, {
      method: 'POST',
      // headers: this._headers,
    }).then(getResponseData);
  } else {
    return fetch(`${BASE_URL}/articles/${articleId}`, {
      method: 'DELETE',
      // headers: this._headers,
    }).then(getResponseData);
  }
}
