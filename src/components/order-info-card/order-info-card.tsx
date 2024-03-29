import React, { FC } from 'react';
import styles from './order-info-card.module.css';
import { IOrderInfoCard } from './order-info-card.props';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { formatDate, getUniqIngredientsByIds } from '../../utils/utils';
import Ingredient from './components/ingredient';
import Loader from '../loader/loader';
import { useAppSelector } from '../../services/store';

const OrderInfoCard: FC<IOrderInfoCard> = () => {
  const { id } = useParams<{ id: string }>();
  const { orders } = useAppSelector((store) => store.ws);
  const { ingredients } = useAppSelector((store) => store.ingredients);
  const order = orders?.find((order) => order._id === id);
  const formattedDate = order && formatDate(order.createdAt);
  const uniqIng = order && getUniqIngredientsByIds(order.ingredients, ingredients);
  const price = uniqIng && uniqIng.reduce((acc, item) => acc + item?.price * item?.qty!, 0);

  const status =
    order?.status === 'created'
      ? 'Создан'
      : order?.status === 'pending'
      ? 'Готовится'
      : order?.status === 'done'
      ? 'Выполнен'
      : '';

  const doneColor = { color: '#00cccc' };
  return (
    <>
      {!order && <Loader />}
      {order && (
        <div className={styles.order}>
          <p className={`text text_type_digits-default mb-10 ${styles.order__num}`}>{`#${order.number}`}</p>
          <h2 className={`text text_type_main-medium mb-3`}>{order.name}</h2>
          <span className={`text text_type_main-default mb-15`} style={status === 'Выполнен' ? doneColor : undefined}>
            {status}
          </span>
          <p className={`text text_type_main-medium mb-6`}>Состав:</p>
          <ul className={styles.order__ingList}>
            {uniqIng?.map((ing) => {
              const uniqId = uuidv4();
              return (
                <li key={uniqId}>
                  <Ingredient ingredient={ing} />
                </li>
              );
            })}
          </ul>
          <div className={styles.order__footer}>
            <span className={`text text_type_main-default text_color_inactive `}>{formattedDate}</span>
            <p className={`text text_type_digits-default ${styles.order__price}`}>
              {price}&nbsp;
              <CurrencyIcon type="primary" />
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderInfoCard;
