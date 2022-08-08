import React, { FC } from 'react';
import { ITotalStat } from './total-stat.props';
import styles from './total-stat.module.css';

const TotalStat: FC<ITotalStat> = ({ heading, quantity }) => {
  return (
    <div className={styles.stat}>
      <p className="text text_type_main-medium">{heading}</p>
      <p className="text text_type_digits-large">{quantity}</p>
    </div>
  );
};

export default TotalStat;
