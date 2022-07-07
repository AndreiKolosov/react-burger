import React from 'react';
import OrderCard from './components/order-card/order-card';
import styles from './orders-list.module.css';

const OrdersList = () => {
  return (
    <ul className={styles.ordersList}>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </ul>
  );
};

export default OrdersList;
