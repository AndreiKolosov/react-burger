import React, { FC } from 'react';
import { useAppSelector } from '../../services/store';
import { IOrderList } from '../../utils/interfaces';
import OrderCard from './components/order-card/order-card';
import styles from './orders-list.module.css';

const OrdersList: FC<IOrderList> = ({ personal }) => {
  const { orders } = useAppSelector((store) => store.ws);
  if (personal) {
    orders && orders.reverse();
  }

  return (
    <ul className={styles.ordersList}>
      {orders &&
        orders.map((order) => {
          return <OrderCard key={order._id} order={order} />;
        })}
    </ul>
  );
};

export default OrdersList;
