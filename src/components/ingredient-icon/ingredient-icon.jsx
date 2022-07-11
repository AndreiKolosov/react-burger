import React from 'react';
import styles from './ingredient-icon.module.css';

const IngredientIcon = ({ img, alt }) => {
  return (
    <div className={styles.iconWrapper}>
      <img className={styles.icon} src={img} alt={alt} />
    </div>
  );
};

export default IngredientIcon;
