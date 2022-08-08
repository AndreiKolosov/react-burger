import React, { FC } from 'react';
import styles from './nutrition-value.module.css';
import { INutritionValue } from './nutrition-value.props';

const NutritionValue: FC<INutritionValue> = ({ text, value }) => {
  return (
    <li className={`${styles.valueItem}`}>
      <p className={`text text_type_main-default text_color_inactive mb-2`}>{text}</p>
      <span className={`text text_type_digits-default text_color_inactive`}>{value}</span>
    </li>
  );
};

export default NutritionValue;
