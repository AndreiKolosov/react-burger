import React from 'react';
import ReadinessStats from './components/readiness-stats/readiness-stats';
import styles from './order-statistic.module.css';

const OrderStatistic = () => {
  return (
    <div className={styles.statistic}>
      <div className={`${styles.statistic__readiness} mb-15`}>
        <ReadinessStats title='Готовы' ready />
        <ReadinessStats title='В работе' />
      </div>
    </div>
  );
};

export default OrderStatistic;
