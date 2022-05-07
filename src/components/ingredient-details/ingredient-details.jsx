import React from 'react';
import styles from './ingredient-details.module.css';
import PropTypes from 'prop-types';
import { ingridientPropType } from '../../utils/prop-types';

const IngredientDetails = ({ ingredient }) => {
  return (
    <div className={`${styles.IngredientDetails} mb-15`}>
      <img className={`mb-4`} src={ingredient.image_large} alt={ingredient.name} />
      <p className={`${styles.IngredientDetails__name} text text_type_main-medium mb-8`}>
        {ingredient.name}
      </p>
      <ul className={`${styles.IngredientDetails__nutritionList} `}>
        <li className={`${styles.IngredientDetails__valueItem}`}>
          <p className={`text text_type_main-default text_color_inactive mb-2`}>Калории,ккал</p>
          <span className={`text text_type_digits-default text_color_inactive`}>
            {ingredient.calories}
          </span>
        </li>
        <li className={`${styles.IngredientDetails__valueItem}`}>
          <p className={`text text_type_main-default text_color_inactive mb-2`}>Белки, г</p>
          <span className={`text text_type_digits-default text_color_inactive`}>
            {ingredient.proteins}
          </span>
        </li>
        <li className={`${styles.IngredientDetails__valueItem}`}>
          <p className={`text text_type_main-default text_color_inactive mb-2`}>Жиры, г</p>
          <span className={`text text_type_digits-default text_color_inactive`}>
            {ingredient.fat}
          </span>
        </li>
        <li className={`${styles.IngredientDetails__valueItem}`}>
          <p className={`text text_type_main-default text_color_inactive mb-2`}>Углеводы, г</p>
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
