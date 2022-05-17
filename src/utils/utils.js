// сортировка массива по типу
const sortItems = (type, arr) => {
  return arr.reduce((acc, item) => {
    if (item.type === type) {
      acc.push(item);
    }
    return acc;
  }, []);
};

const parseResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
};

export { sortItems, parseResponse };
