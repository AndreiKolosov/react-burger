import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients.module.css';
import IngredientsNav from './components/ingredients-nav/ingredients-nav';
import IngredientList from './components/ingredient-list/ingredient-list';
import { IngredientType, ariaLables } from '../../utils/variables';
import { sortItems } from '../../utils/utils';
import { ingridientPropType } from '../../utils/prop-types';
import { useSelector } from 'react-redux';
import Loader from '../loader/loader';

const BurgerIngredients = ({ onIngredientClick }) => {
  const { ingredients } = useSelector((store) => store.ingredients);
  const buns = sortItems(IngredientType.Bun.type, ingredients);
  const mains = sortItems(IngredientType.Main.type, ingredients);
  const sauces = sortItems(IngredientType.Sauce.type, ingredients);
  return (
    <section className={`${styles.ingredients} pt-10`} aria-label={ariaLables.ingredients}>
      <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>
      <IngredientsNav tabs={[IngredientType.Bun, IngredientType.Sauce, IngredientType.Main]} />
      <div className={`${styles.listsContainer} mt-10`}>
        <IngredientList
          items={buns}
          itemsType={IngredientType.Bun}
          onIngredientClick={onIngredientClick}
        />
        <IngredientList
          items={sauces}
          itemsType={IngredientType.Sauce}
          onIngredientClick={onIngredientClick}
        />
        <IngredientList
          items={mains}
          itemsType={IngredientType.Main}
          onIngredientClick={onIngredientClick}
        />
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  onIngredientClick: PropTypes.func.isRequired,
};

export default BurgerIngredients;
