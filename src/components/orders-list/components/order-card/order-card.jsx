import React, { useMemo } from 'react';
import styles from './order-card.module.css';
import { Link, useLocation } from 'react-router-dom';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { formatDate, getIngredientsByIds, getTotalPrice } from '../../../../utils/utils';

const OrderCard = ({ order }) => {
  const location = useLocation();
  const { number, _id, createdAt, name } = order;
  const { ingredients } = useSelector((store) => store.ingredients);

  const orderIngredients = getIngredientsByIds(order.ingredients, ingredients);
  const price = getTotalPrice(orderIngredients);
  // const bun = orderIngredients.filter((item) => item.type === 'bun');
  // const filling = orderIngredients.filter((item) => item.type !== 'bun');

  // const price = useMemo(() => {
  //   return (bun ? bun[0].price * 2 : 0) + filling.reduce((acc, item) => acc + item.price, 0);
  // }, [orderIngredients]);

  // const price = useMemo(() => {
  //   getTotalPrice(orderIngredients);
  // }, [orderIngredients]);

  return (
    <li className={styles.card}>
      <Link
        className={styles.card__link}
        to={{
          pathname: `/orders/${_id}`,
          state: { background: location },
        }}>
        <div className={styles.card__header}>
          <p
            className={`${styles.card__orderNumber} text text_type_digits-default`}>{`# ${number}`}</p>
          <span
            className={`${styles.card__orderTime} text text_type_main-default text_color_inactive`}>
            {formatDate(createdAt)}
          </span>
        </div>
        <h2 className={`${styles.card__burgerName} text text_type_main-medium`}>{name}</h2>
        <div className={styles.card__burgerComposition}>
          <ul className={styles.card__ingredientsList}>
            {orderIngredients.slice(0, 5).map((ingredient, i) => {
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
            {orderIngredients.length > 5 && (
              <li
                className={styles.card__ingredientExtraItem}
                style={{ zIndex: `${orderIngredients.length - 6}` }}>
                <div className={styles.card__extraCounter}>
                  <p className='text text_type_main-default'>{`+${orderIngredients.length - 5}`}</p>
                </div>
                <img
                  className={styles.card__ingredientImg}
                  src={orderIngredients[5].image_mobile}
                  alt={orderIngredients[5].name}
                />
              </li>
            )}
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
