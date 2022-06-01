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

export { ingredientsRequest, postOrder };
