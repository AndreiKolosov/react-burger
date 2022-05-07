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

const ariaLables = {
  ingredients: 'Соберите свой бургер',
  constructor: 'Коструктор бургеров',
};

const apiConfig = {
  baseUrl: 'https://norma.nomoreparties.space/api',
  headers: {
    'Content-Type': 'application/json',
  },
};

export { IngredientType, ariaLables, apiConfig };
