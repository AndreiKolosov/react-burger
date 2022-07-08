import React from 'react';
import styles from './readiness-stat.module.css';

const ReadinessStats = ({ title, ready, orders }) => {
  const color = ready
    ? {
        color: '#00cccc',
      }
    : {};

  return (
    <div className={styles.stats}>
      <p className={`${styles.stats__title} text text_type_main-medium mb-6`}>{title}</p>
      <ul className={styles.stats__list}>
        {orders.slice(0, 5).map((order) => {
          return (
            <li key={order}>
              <p
                className={`${styles.stats__orderNum} text text_type_digits-default`}
                style={color}>
                {order}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReadinessStats;
