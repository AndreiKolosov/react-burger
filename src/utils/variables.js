import { getCookie } from './cookie';

const IngredientType = {
  Bun: {
    type: 'bun',
    name: 'Булки',
  },
  Main: {
    type: 'main',
    name: 'Начинки',
  },
  Sauce: {
    type: 'sauce',
    name: 'Соусы',
  },
};

const ariaLabels = {
  ingredients: 'Соберите свой бургер',
  constructor: 'Коструктор бургеров',
};

const apiConfig = {
  baseUrl: 'https://norma.nomoreparties.space/api',
};

const wsUrl = 'wss://norma.nomoreparties.space/orders/all';
const wsUrlWithAuth = `wss://norma.nomoreparties.space/orders?token=${getCookie('accessToken')}`;

export { IngredientType, ariaLabels, apiConfig, wsUrl, wsUrlWithAuth };
