import React from 'react';
import styles from './burger-ingredients.module.css';
import IngredientsNav from './components/ingredients-nav/ingredients-nav';
import IngredientList from './components/ingredient-list/ingredient-list';
import { IngredientType, ariaLables } from '../../utils/variables';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { CLOSE_INGREDIENT_DETAILS } from '../../services/actions/ingredient';

const BurgerIngredients = () => {
  const { ingredients } = useSelector((store) => store.ingredients);
  const { ingredient } = useSelector((store) => store.ingredient);

  const buns = ingredients.filter((ingredient) => ingredient.type === IngredientType.Bun.type);
  const mains = ingredients.filter((ingredient) => ingredient.type === IngredientType.Main.type);
  const sauces = ingredients.filter((ingredient) => ingredient.type === IngredientType.Sauce.type);

  const dispatch = useDispatch();

  const closeIngredientDetails = () => {
    dispatch({ type: CLOSE_INGREDIENT_DETAILS });
  };

  return (
    <section className={`${styles.ingredients} pt-10`} aria-label={ariaLables.ingredients}>
      <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>
      <IngredientsNav tabs={[IngredientType.Bun, IngredientType.Sauce, IngredientType.Main]} />
      <div className={`${styles.listsContainer} mt-10`}>
        <IngredientList items={buns} itemsType={IngredientType.Bun} />
        <IngredientList items={sauces} itemsType={IngredientType.Sauce} />
        <IngredientList items={mains} itemsType={IngredientType.Main} />
      </div>

      {ingredient && (
        <Modal heading={'Детали ингредиента'} closeModal={closeIngredientDetails}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </section>
  );
};

export default BurgerIngredients;
