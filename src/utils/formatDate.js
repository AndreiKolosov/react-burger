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
export { formatDate };
