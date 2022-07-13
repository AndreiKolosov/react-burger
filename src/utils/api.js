import { apiConfig } from './variables';

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _parseResponse(res) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

  ingredientsRequest() {
    return fetch(`${this._baseUrl}/ingredients`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => this._parseResponse(res));
  }

  postOrder(accessToken, order) {
    return fetch(`${this._baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: accessToken,
      },
      body: JSON.stringify({
        ingredients: order,
      }),
    }).then((res) => this._parseResponse(res));
  }

  createUser(name, email, password) {
    return fetch(`${this._baseUrl}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then((res) => this._parseResponse(res));
  }

  logIn(email, password) {
    return fetch(`${this._baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => this._parseResponse(res));
  }

  logOut(refreshToken) {
    return fetch(`${this._baseUrl}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: refreshToken,
      }),
    }).then((res) => this._parseResponse(res));
  }

  getUser(accessToken) {
    return fetch(`${this._baseUrl}/auth/user`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: accessToken,
      },
    }).then((res) => this._parseResponse(res));
  }

  patchUser(accessToken, name, email, password) {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: accessToken,
      },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
      }),
    }).then((res) => this._parseResponse(res));
  }

  forgotPassword(email) {
    return fetch(`${this._baseUrl}/password-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    }).then((res) => this._parseResponse(res));
  }

  resetPassword(password, token) {
    return fetch(`${this._baseUrl}/password-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
        token,
      }),
    }).then((res) => this._parseResponse(res));
  }

  refreshToken(refreshToken) {
    return fetch(`${this._baseUrl}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: refreshToken,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // fetchWithRefresh(url, options) {
  //   return fetch(url, options)
  //     .then((res) => this._parseResponse(res))
  //     .catch((err) => {
  //       if (err.message === 'jwt expired' || err.message === 'You should be authorised') {
  //         const refreshToken = localStorage.getItem('refreshToken');

  //         if (!refreshToken) {
  //           return Promise.reject('Token does not exist in storage');
  //         } else if (refreshToken) {
  //           this.refreshToken(refreshToken)
  //             .then((res) => {
  //               setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
  //               localStorage.setItem('refreshToken', res.refreshToken);
  //             })
  //             .then((res) => {
  //               fetch(url, {
  //                 ...options,
  //                 headers: {
  //                   ...options.headers,
  //                   authorization: res.accessToken,
  //                 },
  //               }).then((res) => this._parseResponse(res));
  //             });
  //         } else {
  //           return Promise.reject(err);
  //         }
  //       }
  //     });
  // }
}

export default new Api(apiConfig);
