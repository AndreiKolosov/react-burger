import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/loader/loader';
import OrderInfoCard from '../../components/order-info-card/order-info-card';
import styles from './order-info.module.css';

const OrderInfo = () => {
  const { orders } = useSelector((store) => store.ws);
  return (
    <main className={styles.content}>
      {orders && (
        <section className={styles.OrderInfo}>
          <OrderInfoCard />
        </section>
      )}
    </main>
  );
};

export default OrderInfo;
