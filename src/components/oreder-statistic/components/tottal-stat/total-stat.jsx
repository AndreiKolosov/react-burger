import React from 'react';
import styles from './total-stat.module.css';

const TotalStat = ({ heading, children }) => {
  return (
    <div className={styles.stat}>
      <p className='text text_type_main-medium'>{heading}</p>
      <p className='text text_type_digits-large'>{children}</p>
    </div>
  );
};

export default TotalStat;
