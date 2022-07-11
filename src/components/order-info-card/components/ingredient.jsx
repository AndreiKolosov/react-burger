import React from 'react';
import styles from './ingredient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientIcon from '../../ingredient-icon/ingredient-icon';

const Ingredient = ({ ingredient }) => {
  return (
    <div className={styles.ingredient}>
      <IngredientIcon img={ingredient.image_mobile} alt={ingredient.name} />
      <div className={`ml-4 ${styles.ingredient__info}`}>
        <p className={`text text_type_main-default ${styles.ingredient__name}`}>
          {ingredient.name}
        </p>
        <p className={`${styles.card__price} text text_type_digits-default`}>
          &nbsp;
          <CurrencyIcon type='primary' />
        </p>
      </div>
    </div>
  );
};

export default Ingredient;
