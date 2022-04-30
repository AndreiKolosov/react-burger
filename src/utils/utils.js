// сортировка массива по ключу
const sortItems = (type, arr) => {
  return arr.reduce((acc, item) => {
    if (item.type === type) {
      acc.push(item);
    }
    return acc;
  }, []);
};

export { sortItems };
