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
