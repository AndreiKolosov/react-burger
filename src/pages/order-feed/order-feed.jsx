import React from 'react';
import styles from './order-feed.module.css';
import OrdersList from '../../components/orders-list/orders-list';
import OrderStatistic from '../../components/oreder-statistic/order-statistic';

const OrderFeed = () => {
  return (
    <main className={styles.content}>
      <section className={styles.feed}>
        <h2 className={`${styles.feed__title} text text_type_main-large mt-10 mb-5 ml-2`}>
          Лента заказов
        </h2>
        <div className={styles.feed__content}>
          <OrdersList />
          <OrderStatistic />
        </div>
      </section>
    </main>
  );
};

export default OrderFeed;
