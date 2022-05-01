import React from 'react';
import propTypes from 'prop-types';
import styles from './burger-ingredients.module.css';
import IngredientsNav from './components/ingredients-nav/ingredients-nav';
import IngredientList from './components/ingredient-list/ingredient-list';
import { IngredientType, ariaLables } from '../../utils/variables';
import { sortItems } from '../../utils/utils';
import { ingridientPropType, ariaLablePropType } from '../../utils/prop-types';

const BurgerIngredients = (props) => {
  const buns = sortItems(IngredientType.Bun.type, props.data);
  const mains = sortItems(IngredientType.Main.type, props.data);
  const sauces = sortItems(IngredientType.Sauce.type, props.data);
  console.log(buns);
  return (
    <section className={`${styles.ingredients} pt-10`} aria-label={ariaLables.ingredients}>
      <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>
      <IngredientsNav tabs={[IngredientType.Bun, IngredientType.Sauce, IngredientType.Main]} />
      <div className={`${styles.listsContainer} mt-10`}>
        <IngredientList items={buns} itemsType={IngredientType.Bun} />
        <IngredientList items={sauces} itemsType={IngredientType.Sauce} />
        <IngredientList items={mains} itemsType={IngredientType.Main} />
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  data: propTypes.arrayOf(ingridientPropType.isRequired).isRequired,
  ariaLables: propTypes.arrayOf(ariaLablePropType),
};

export default BurgerIngredients;
