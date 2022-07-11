import React from 'react';
import OrderInfoCard from '../../components/order-info-card/order-info-card';
import styles from './order-info.module.css';

const OrderInfo = () => {
  return (
    <main className={styles.content}>
      <section className={styles.OrderInfo}>
        <OrderInfoCard />
      </section>
    </main>
  );
};

export default OrderInfo;
