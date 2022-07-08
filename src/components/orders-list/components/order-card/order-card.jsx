import React, { useMemo } from 'react';
import styles from './order-card.module.css';
import { Link } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { formatDate } from '../../../../utils/formatDate';

const OrderCard = ({ number, time, name, ingredientsIds }) => {
  const { ingredients } = useSelector((store) => store.ingredients);

  const orderIngredients = [...new Set(ingredientsIds)].map((id) => {
    const data = ingredients.find((ing) => ing._id === id);

    return data; // получил массив всех ингредиентов бургера
  });

  const bun = orderIngredients.filter((item) => item.type === 'bun');
  const filling = orderIngredients.filter((item) => item.type !== 'bun');

  const price = useMemo(() => {
    return (bun ? bun[0].price * 2 : 0) + filling.reduce((acc, item) => acc + item.price, 0);
  }, [orderIngredients]);
  return (
    <li className={styles.card}>
      <Link className={styles.card__link}>
        <div className={styles.card__header}>
          <p
            className={`${styles.card__orderNumber} text text_type_digits-default`}>{`# ${number}`}</p>
          <span
            className={`${styles.card__orderTime} text text_type_main-default text_color_inactive`}>
            {formatDate(time)}
          </span>
        </div>
        <h2 className={`${styles.card__burgerName} text text_type_main-medium`}>{name}</h2>
        <div className={styles.card__burgerComposition}>
          <ul className={styles.card__ingredientsList}>
            {orderIngredients.map((ingredient, i) => {
              return (
                <li
                  key={i}
                  className={styles.card__ingredientItem}
                  style={{ zIndex: `${orderIngredients.length - i}` }}>
                  <img
                    className={styles.card__ingredientImg}
                    src={ingredient.image_mobile}
                    alt={ingredient.name}
                  />
                </li>
              );
            })}
          </ul>
          <div className={styles.card__price}>
            <span className={`${styles.card__totalPrice} text text_type_digits-default`}>
              {price}
            </span>
            <CurrencyIcon type='primary' />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default OrderCard;
