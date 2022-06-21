import { apiConfig } from './variables';

const parseResponse = (res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));

const ingredientsRequest = () => {
  return fetch(`${apiConfig.baseUrl}/ingredients`, {
    headers: apiConfig.headers,
  }).then((res) => parseResponse(res));
};

const postOrder = (order) => {
  return fetch(`${apiConfig.baseUrl}/orders`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      ingredients: order,
    }),
  }).then((res) => parseResponse(res));
};

const createUser = (name, email, password) => {
  return fetch(`${apiConfig.baseUrl}/auth/register`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then((res) => parseResponse(res));
};

const signIn = (email, password) => {
  return fetch(`${apiConfig.baseUrl}/auth/login`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => parseResponse(res));
};

const forgotPassword = (email) => {
  return fetch(`${apiConfig.baseUrl}/password-reset`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      email,
    }),
  }).then((res) => parseResponse(res));
};

const resetPassword = (password, token) => {
  return fetch(`${apiConfig.baseUrl}/password-reset`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      password,
      token,
    }),
  }).then((res) => parseResponse(res));
};

export { ingredientsRequest, postOrder, createUser, forgotPassword, resetPassword, signIn };
