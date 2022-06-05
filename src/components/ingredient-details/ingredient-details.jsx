import React from 'react';
import styles from './ingredient-details.module.css';
import { ingredientPropType } from '../../utils/prop-types';
import NutritionValue from './components/nutrition-value';

const IngredientDetails = ({ ingredient }) => {
  return (
    <div className={`${styles.IngredientDetails} mb-15`}>
      <img className={`mb-4`} src={ingredient.image_large} alt={ingredient.name} />
      <p className={`${styles.IngredientDetails__name} text text_type_main-medium mb-8`}>
        {ingredient.name}
      </p>
      <ul className={`${styles.IngredientDetails__nutritionList} `}>
        <NutritionValue text='Калории,ккал' value={ingredient.calories} />
        <NutritionValue text='Белки, г' value={ingredient.proteins} />
        <NutritionValue text='Жиры, г' value={ingredient.fat} />
        <NutritionValue text='Углеводы, г' value={ingredient.carbohydrates} />
      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: ingredientPropType.isRequired,
};

export default IngredientDetails;
