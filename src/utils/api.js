import { getCookie } from './utils';
import { apiConfig } from './variables';

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _parseResponse(res) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(`Ошибка: ${err}`));
  }

  ingredientsRequest() {
    return fetch(`${this._baseUrl}/ingredients`, {
      headers: this._headers,
    }).then((res) => this._parseResponse(res));
  }

  postOrder(order) {
    return fetch(`${this._baseUrl}/orders`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        ingredients: order,
      }),
    }).then((res) => this._parseResponse(res));
  }

  createUser(name, email, password) {
    return fetch(`${this._baseUrl}/auth/register`, {
      method: 'POST',
      headers: this._headers,
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
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => this._parseResponse(res));
  }

  logOut() {
    return fetch(`${this._baseUrl}/auth/logout`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        token: getCookie('refreshToken'),
      }),
    }).then((res) => this._parseResponse(res));
  }

  forgotPassword(email) {
    return fetch(`${this._baseUrl}/password-reset`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
      }),
    }).then((res) => this._parseResponse(res));
  }

  resetPassword(password, token) {
    return fetch(`${this._baseUrl}/password-reset`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password,
        token,
      }),
    }).then((res) => this._parseResponse(res));
  }
}

// const parseResponse = (res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));

// const ingredientsRequest = () => {
//   return fetch(`${apiConfig.baseUrl}/ingredients`, {
//     headers: apiConfig.headers,
//   }).then((res) => parseResponse(res));
// };

// const postOrder = (order) => {
//   return fetch(`${apiConfig.baseUrl}/orders`, {
//     method: 'POST',
//     headers: apiConfig.headers,
//     body: JSON.stringify({
//       ingredients: order,
//     }),
//   }).then((res) => parseResponse(res));
// };

// const createUser = (name, email, password) => {
//   return fetch(`${apiConfig.baseUrl}/auth/register`, {
//     method: 'POST',
//     headers: apiConfig.headers,
//     body: JSON.stringify({
//       name,
//       email,
//       password,
//     }),
//   }).then((res) => parseResponse(res));
// };

// const signIn = (email, password) => {
//   return fetch(`${apiConfig.baseUrl}/auth/login`, {
//     method: 'POST',
//     headers: apiConfig.headers,
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   }).then((res) => parseResponse(res));
// };

// const forgotPassword = (email) => {
//   return fetch(`${apiConfig.baseUrl}/password-reset`, {
//     method: 'POST',
//     headers: apiConfig.headers,
//     body: JSON.stringify({
//       email,
//     }),
//   }).then((res) => parseResponse(res));
// };

// const resetPassword = (password, token) => {
//   return fetch(`${apiConfig.baseUrl}/password-reset`, {
//     method: 'POST',
//     headers: apiConfig.headers,
//     body: JSON.stringify({
//       password,
//       token,
//     }),
//   }).then((res) => parseResponse(res));
// };

// export { ingredientsRequest, postOrder, createUser, forgotPassword, resetPassword, signIn };

export default new Api(apiConfig);
