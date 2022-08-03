import { IIngredient } from './interfaces';

function notEmptyFilter<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

const formatDate = (date: string): string => {
  const orderDate = Number(
    date
      .split('T')[0]
      .split('-')[2]
      .split('')
      .filter((i) => i !== '0')
      .join('')
  );
  const orderTime = date.split('T')[1].split('.')[0].split(':', 2).join(':');
  const dateNow = new Date().getDate();
  let formattedDate = '';

  if (orderDate === dateNow) {
    formattedDate = `Сегодня, ${orderTime} i-GMT+3`;
  }
  if (orderDate === dateNow - 1) {
    formattedDate = `Вчера, ${orderTime} i-GMT+3`;
  }
  if (orderDate < dateNow - 1 && orderDate > dateNow - 5) {
    formattedDate = `${dateNow - orderDate} дня назад, ${orderTime} i-GMT+3`;
  }

  if (orderDate < dateNow - 4) {
    formattedDate = `${dateNow - orderDate} дней назад, ${orderTime} i-GMT+3`;
  }

  return formattedDate;
};

const getIngredientsByIds = (ids: string[], allIng: IIngredient[]): IIngredient[] => {
  const data = ids.map((id) => allIng.find((ing) => ing._id === id));
  const filteredData = data.filter(notEmptyFilter);

  const bun = Array.from(new Set(filteredData.filter((ing) => ing && ing.type === 'bun'))); // коллекция уникальных элементов через new Set
  const filling = filteredData.filter((ing) => ing && ing.type !== 'bun');

  return bun.concat(filling);
};

const getQuantity = (array: IIngredient[], item: IIngredient): number => {
  let counter = 0;

  array.forEach((element) => {
    if (element._id === item._id) {
      counter++;
    }
  });
  return counter;
};

const getUniqIngredientsByIds = (ids: string[], allIng: IIngredient[]): IIngredient[] => {
  const data = ids.map((id) => allIng.find((ing) => ing._id === id));
  const filteredData = data.filter(notEmptyFilter);
  filteredData.forEach((el) => {
    el.qty = getQuantity(filteredData, el);
    // В присланном заказе может оказаться как 2 булки, так и одна
    // По этому делаем такую проверку и добаваляем в поле коллчества еще 1
    if (el.qty && el.type === 'bun' && el.qty !== 2) {
      el.qty++;
    }
  });

  const bun = Array.from(new Set(filteredData.filter((ing) => ing && ing.type === 'bun'))); // коллекция уникальных элементов через new Set
  const filling = Array.from(new Set(filteredData.filter((ing) => ing && ing.type !== 'bun')));
  return bun.concat(filling);
};

const getTotalPrice = (ingredients: IIngredient[]): number => {
  const bun = ingredients.find((item) => item.type === 'bun');
  const filling = ingredients.filter((item) => item.type !== 'bun');
  const total = bun ? bun?.price * 2 : 0 + filling.reduce((acc, item) => acc + item?.price, 0);

  return total;
};

export { formatDate, getIngredientsByIds, getUniqIngredientsByIds, getTotalPrice, getQuantity };
