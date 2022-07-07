import React from 'react';
import styles from './readiness-stat.module.css';

const ReadinessStats = ({ title, ready, children }) => {
  const color = ready
    ? {
        color: '#00cccc',
      }
    : {};

  return (
    <div className={styles.stats}>
      <p className={`${styles.stats__title} text text_type_main-medium mb-6`}>{title}</p>
      <ul className={styles.stats__list}>
        <li>
          <p className={`${styles.stats__orderNum} text text_type_digits-default`} style={color}>
            034533
          </p>
        </li>
        <li>
          <p className={`${styles.stats__orderNum} text text_type_digits-default`} style={color}>
            034533
          </p>
        </li>
        <li>
          <p className={`${styles.stats__orderNum} text text_type_digits-default`} style={color}>
            034533
          </p>
        </li>
        <li>
          <p className={`${styles.stats__orderNum} text text_type_digits-default`} style={color}>
            034533
          </p>
        </li>
        <li>
          <p className={`${styles.stats__orderNum} text text_type_digits-default`} style={color}>
            034533
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ReadinessStats;
