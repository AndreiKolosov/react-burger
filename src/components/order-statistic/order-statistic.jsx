import React from 'react';
import ReadinessStats from './components/readiness-stat/readiness-stat';
import TotalStat from './components/total-stat/total-stat';
import styles from './order-statistic.module.css';
import { useSelector } from 'react-redux';

const OrderStatistic = () => {
  const { orders, total, totalToday } = useSelector((store) => store.ws);

  const pendingOrders = orders
    .filter((order) => order.status === 'pending')
    .map((order) => order.number);

  const doneOrders = orders.filter((order) => order.status === 'done').map((order) => order.number);

  return (
    <div className={styles.statistic}>
      <div className={styles.statistic__readiness}>
        <ReadinessStats title='Готовы' ready orders={doneOrders} />
        <ReadinessStats title='В работе' orders={pendingOrders} />
      </div>
      <TotalStat heading='Выполнено за все время:' children={total} />
      <TotalStat heading='Выполнено за сегодня:' children={totalToday} />
    </div>
  );
};

export default OrderStatistic;
