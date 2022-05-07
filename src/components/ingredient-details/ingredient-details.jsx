import React from 'react';
import styles from './ingredient-details.module.css';
import PropTypes from 'prop-types';
import { ingridientPropType } from '../../utils/prop-types';

const IngredientDetails = ({ ingredient }) => {
  return (
    <div className={`${styles.IngredientDetails}`}>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <p className={`${styles.IngredientDetails__name}`}>{ingredient.name}</p>
      <ul className={`${styles.IngredientDetails__nutritionList}`}>
        <li className={`${styles.IngredientDetails__valueItem}`}>
          <p className={`text text_type_main-default text_color_inactive`}>Калории,ккал</p>
          <span className={`text text_type_digits-default text_color_inactive`}>
            {ingredient.calories}
          </span>
        </li>
        <li className={`${styles.IngredientDetails__valueItem}`}>
          <p className={`text text_type_main-default text_color_inactive`}>Белки, г</p>
          <span className={`text text_type_digits-default text_color_inactive`}>
            {ingredient.proteins}
          </span>
        </li>
        <li className={`${styles.IngredientDetails__valueItem}`}>
          <p className={`text text_type_main-default text_color_inactive`}>Жиры, г</p>
          <span className={`text text_type_digits-default text_color_inactive`}>
            {ingredient.fat}
          </span>
        </li>
        <li className={`${styles.IngredientDetails__valueItem}`}>
          <p className={`text text_type_main-default text_color_inactive`}>Углеводы, г</p>
          <span className={`text text_type_digits-default text_color_inactive`}>
            {ingredient.carbohydrates}
          </span>
        </li>
      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: ingridientPropType.isRequired,
};

export default IngredientDetails;
