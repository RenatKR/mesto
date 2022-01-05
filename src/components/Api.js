export default class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(this._url + '/cards', {
      method: 'GET',
      headers: this._headers
    }).then((res) => {
      return this.checkRes(res);
    })
  }

  getUserInfo() {
    return fetch(this._url + '/users/me', {
      method: 'GET',
      headers: this._headers
    }).then((res) => {
      return this.checkRes(res);
    })
  }

  editUserInfo(data) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then((res) => {
      return this.checkRes(res);
    })
  }

  editUserAva(data) {
    return fetch(this._url + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then((res) => {
      return this.checkRes(res);
    })
  }

  addNewCard(data) {
    return fetch(this._url + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then((res) => {
      return this.checkRes(res);
    })
  }

  deleteCard(cardId) {
    return fetch(this._url + `/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      return this.checkRes(res);
    })
  }

  setLikeCard(cardId) {
    return fetch(this._url + `/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => {
      return this.checkRes(res);
    })
  }

  deleteLikeCard(cardId) {
    return fetch(this._url + `/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      return this.checkRes(res);
    })
  }
}