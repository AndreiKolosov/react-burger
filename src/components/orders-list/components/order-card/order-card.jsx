import React, { useMemo } from 'react';
import styles from './order-card.module.css';
import { v4 as uuidv4 } from 'uuid';
import { Link, useLocation } from 'react-router-dom';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { formatDate, getIngredientsByIds, getTotalPrice } from '../../../../utils/utils';

const OrderCard = ({ order }) => {
  const location = useLocation();
  const { number, _id, createdAt, name } = order;
  const { ingredients } = useSelector((store) => store.ingredients);

  const formattedDate = formatDate(createdAt);
  const orderIngredients = getIngredientsByIds(order.ingredients, ingredients);
  const price = getTotalPrice(orderIngredients);

  return (
    <li className={styles.card}>
      <Link
        className={styles.card__link}
        to={{
          pathname: `/feed/${_id}`,
          state: { background: location },
        }}>
        <div className={styles.card__header}>
          <p
            className={`${styles.card__orderNumber} text text_type_digits-default`}>{`# ${number}`}</p>
          <span
            className={`${styles.card__orderTime} text text_type_main-default text_color_inactive`}>
            {formattedDate}
          </span>
        </div>
        <h2 className={`${styles.card__burgerName} text text_type_main-medium`}>{name}</h2>
        <div className={styles.card__burgerComposition}>
          <ul className={styles.card__ingredientsList}>
            {orderIngredients.slice(0, 5).map((ingredient, i) => {
              const uniqId = uuidv4();
              return (
                <li
                  key={uniqId}
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
          <p className={`${styles.card__price} text text_type_digits-default`}>
            {price}&nbsp;
            <CurrencyIcon type='primary' />
          </p>
        </div>
      </Link>
    </li>
  );
};

export default OrderCard;
