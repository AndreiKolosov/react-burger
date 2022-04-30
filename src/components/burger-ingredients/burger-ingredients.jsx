import React from 'react';
import styles from './burger-ingredients.module.css';
import IngredientsNav from '../ingredients-nav/ingredients-nav';
import IngredientList from '../ingredient-list/ingredient-list';
import { IngredientType } from '../../utils/variables';
import { sortItems } from '../../utils/utils';

const BurgerIngredients = (props) => {
  const buns = sortItems(IngredientType.Bun.type, props.data);
  const mains = sortItems(IngredientType.Main.type, props.data);
  const sauces = sortItems(IngredientType.Sauce.type, props.data);
  console.log(buns);
  return (
    <section className={`${styles.ingredients} pt-10`}>
      <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>
      <IngredientsNav tabs={[IngredientType.Bun, IngredientType.Main, IngredientType.Sauce]} />
      <div className={`${styles.lists} mt-10`}>
        <IngredientList items={buns} itemsType={IngredientType.Bun} />
        <IngredientList items={mains} itemsType={IngredientType.Main} />
        <IngredientList items={sauces} itemsType={IngredientType.Sauce} />
      </div>
    </section>
  );
};

export default BurgerIngredients;
