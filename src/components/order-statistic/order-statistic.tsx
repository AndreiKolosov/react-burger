import React, { FC } from 'react';
import { IOrderStatistic } from './order-statistic.props';
import styles from './order-statistic.module.css';
import ReadinessStats from './components/readiness-stat/readiness-stat';
import TotalStat from './components/total-stat/total-stat';
import { useAppSelector } from '../../services/store';

const OrderStatistic: FC<IOrderStatistic> = () => {
  const { orders, total, totalToday } = useAppSelector((store) => store.ws);

  const pendingOrders = orders?.filter((order) => order.status === 'pending').map((order) => order.number);

  const doneOrders = orders?.filter((order) => order.status === 'done').map((order) => order.number);

  return (
    <div className={styles.statistic}>
      <div className={styles.statistic__readiness}>
        {doneOrders && <ReadinessStats title="Готовы" ready orders={doneOrders} />}
        {pendingOrders && <ReadinessStats title="В работе" orders={pendingOrders} />}
      </div>
      <TotalStat heading="Выполнено за все время:" quantity={total} />
      <TotalStat heading="Выполнено за сегодня:" quantity={totalToday} />
    </div>
  );
};

export default OrderStatistic;
