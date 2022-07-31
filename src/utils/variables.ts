import { getCookie } from './cookie';

type TIngredient = {
  type: string;
  name: string;
};

export type TIngredientType = {
  Bun: TIngredient;
  Main: TIngredient;
  Sauce: TIngredient;
};

const IngredientType: TIngredientType = {
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

export type TAriaLabels = {
  ingredients: string;
  constructor: string;
};

const ariaLabels: TAriaLabels = {
  ingredients: 'Соберите свой бургер',
  constructor: 'Коструктор бургеров',
};

const apiConfig: { baseUrl: string } = {
  baseUrl: 'https://norma.nomoreparties.space/api',
};

const wsUrl: string = 'wss://norma.nomoreparties.space/orders/all';

export { IngredientType, ariaLabels, apiConfig, wsUrl };
