const baseUrl = 'https://api.gnews.students.nomoreparties.sbs';

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
}

export function changeSavedCardStatus(articleId, isSaved) {
  if (isSaved) {
    return fetch(`${baseUrl}/articles`, {
      method: 'POST',
      // headers: this._headers,
    }).then(getResponseData);
  } else {
    return fetch(`${baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      // headers: this._headers,
    }).then(getResponseData);
  }
}
