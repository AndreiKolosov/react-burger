import React from 'react';
import styles from './order-feed.module.css';
import OrdersList from '../../components/orders-list/orders-list';

const OrderFeed = () => {
  return (
    <main className={styles.content}>
      <section className={styles.feed}>
        <h2 className={`${styles.feedTitle} text text_type_main-large mt-10 mb-5 ml-2`}>
          Лента заказов
        </h2>
        <OrdersList />
      </section>
    </main>
  );
};

export default OrderFeed;
