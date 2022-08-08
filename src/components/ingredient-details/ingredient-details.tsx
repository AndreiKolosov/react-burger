import React, { FC } from 'react';
import styles from './ingredient-details.module.css';
import NutritionValue from './components/nutrition-value';
import { useParams } from 'react-router-dom';
import Loader from '../loader/loader';
import { IIngredientDetails } from './ingredient-details.props';
import { useAppSelector } from '../../services/store';

const IngredientDetails: FC<IIngredientDetails> = () => {
  const { id } = useParams<{ id: string }>();
  const { ingredients } = useAppSelector((store) => store.ingredients);
  const ingredient = ingredients.find((ingredient) => ingredient._id === id);

  return (
    <>
      {!ingredient && <Loader />}
      {ingredient && (
        <div className={`${styles.IngredientDetails} mb-15`}>
          <img className={`mb-4`} src={ingredient.image_large} alt={ingredient.name} />
          <p className={`${styles.IngredientDetails__name} text text_type_main-medium mb-8`}>{ingredient.name}</p>
          <ul className={`${styles.IngredientDetails__nutritionList} `}>
            <NutritionValue text="Калории,ккал" value={ingredient.calories} />
            <NutritionValue text="Белки, г" value={ingredient.proteins} />
            <NutritionValue text="Жиры, г" value={ingredient.fat} />
            <NutritionValue text="Углеводы, г" value={ingredient.carbohydrates} />
          </ul>
        </div>
      )}
    </>
  );
};

export default IngredientDetails;
