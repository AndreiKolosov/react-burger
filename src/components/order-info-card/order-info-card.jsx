import React from 'react';
import styles from './order-info-card.module.css';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { formatDate, getIngredientsByIds, getTotalPrice } from '../../utils/utils';

const OrderInfoCard = () => {
  const { id } = useParams();
  const { orders } = useSelector((store) => store.ws);
  const { ingredients } = useSelector((store) => store.ingredients);

  const order = orders.find((order) => order._id === id);
  const formattedDate = formatDate(order.createdAt);
  const orderIngredients = getIngredientsByIds(order.ingredients, ingredients);
  const price = getTotalPrice(orderIngredients);

  const status =
    order.status === 'created'
      ? 'Создан'
      : order.status === 'pending'
      ? 'Готовится'
      : order.status === 'done'
      ? 'Выполнен'
      : '';

  const doneColor = { color: '#00cccc' };
  return (
    <div className={styles.order}>
      <p
        className={`text text_type_digits-default mb-10 ${styles.order__num}`}>{`#${order.number}`}</p>
      <h2 className={`text text_type_main-medium mb-3`}>{order.name}</h2>
      <span
        className={`text text_type_main-default mb-15`}
        style={status === 'Выполнен' ? doneColor : null}>
        {status}
      </span>
      <p className={`text text_type_main-medium mb-6`}>Состав:</p>
      <ul className={`mb-10 ${styles.order__ingList}`}>
        {orderIngredients.map((ing) => {
          const uniqId = uuidv4();
          return <li key={uniqId}></li>;
        })}
      </ul>
      <div className={styles.order__footer}>
        <span className={`text text_type_main-default text_color_inactive `}>{formattedDate}</span>
        <p className={`text text_type_digits-default ${styles.order__price}`}>
          {price}&nbsp;
          <CurrencyIcon type='primary' />
        </p>
      </div>
    </div>
  );
};

export default OrderInfoCard;
