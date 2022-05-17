import React from 'react';
import styles from './nutrition-value.module.css';
import PropTypes from 'prop-types';

const NutritionValue = ({ text, value }) => {
  return (
    <li className={`${styles.valueItem}`}>
      <p className={`text text_type_main-default text_color_inactive mb-2`}>{text}</p>
      <span className={`text text_type_digits-default text_color_inactive`}>{value}</span>
    </li>
  );
};

NutritionValue.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default NutritionValue;
