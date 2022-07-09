const formatDate = (date) => {
  const orderDate = Number(
    date
      .split('T')[0]
      .split('-')[2]
      .split('')
      .filter((i) => i !== '0')
  );
  const orderTime = date.split('T')[1].split('.')[0].split(':', 2).join(':');
  const dateNow = new Date().getUTCDate();
  let formatedDate = '';

  if (orderDate === dateNow) {
    formatedDate = `Сегодня, ${orderTime} i-GMT+3`;
  }
  if (orderDate === dateNow - 1) {
    formatedDate = `Вчера, ${orderTime} i-GMT+3`;
  }
  if (orderDate < dateNow - 1) {
    formatedDate = `${dateNow - orderDate} дня назад, ${orderTime} i-GMT+3`;
  }

  return formatedDate;
};

const getIngredientsByIds = (ids, allIng) => {
  const data = ids.map((id) => {
    return allIng.find((ing) => ing._id === id);
  });

  const bun = [...new Set(data.filter((ing) => ing.type === 'bun'))]; // коллекция уникальных элементов через new Set
  const filling = data.filter((ing) => ing.type !== 'bun');

  return bun.concat(filling);
};

const getTotalPrice = (ingredients) => {
  const bun = ingredients.filter((item) => item.type === 'bun');
  const filling = ingredients.filter((item) => item.type !== 'bun');

  return filling.reduce((acc, item) => acc + item.price, 0) + bun[0].price * 2;
};

export { formatDate, getIngredientsByIds, getTotalPrice };
