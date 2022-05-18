import { apiConfig } from './variables';

const getIngredients = (setData, setLoading, setError) => {
  fetch(`${apiConfig.baseUrl}/ingredients`, {
    headers: apiConfig.headers,
  })
    .then((res) => parseResponse(res))
    .then((res) => setData(res.data))
    .catch((err) => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
};

const postOrder = (order, setNum) => {
  fetch(`${apiConfig.baseUrl}/orders`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      ingredients: order,
    }),
  })
    .then((res) => parseResponse(res))
    .then((res) => setNum(res.order.number))
    .catch((err) => console.log(err));
};

const parseResponse = (res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));

export { getIngredients, postOrder };
