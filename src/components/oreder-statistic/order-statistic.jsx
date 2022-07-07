import React from 'react';
import ReadinessStats from './components/readiness-stat/readiness-stat';
import TotalStat from './components/tottal-stat/total-stat';
import styles from './order-statistic.module.css';

const OrderStatistic = () => {
  return (
    <div className={styles.statistic}>
      <div className={styles.statistic__readiness}>
        <ReadinessStats title='Готовы' ready />
        <ReadinessStats title='В работе' />
      </div>
      <TotalStat heading='Выполнено за все время:' children={'27 585'} />
      <TotalStat heading='Выполнено за сегодня:' children={'182'} />
    </div>
  );
};

export default OrderStatistic;
