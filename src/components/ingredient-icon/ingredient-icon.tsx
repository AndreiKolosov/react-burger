import React, { FC } from 'react';
import styles from './ingredient-icon.module.css';
import { IIngredientIcon } from './ingredient-icon.props';

const IngredientIcon: FC<IIngredientIcon> = ({ img, alt }) => {
  return (
    <div className={styles.iconWrapper}>
      <img className={styles.icon} src={img} alt={alt} />
    </div>
  );
};

export default IngredientIcon;
