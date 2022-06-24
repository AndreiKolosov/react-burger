import React, { useCallback, useEffect, useState } from 'react';
import styles from './burger-ingredients.module.css';
import IngredientsNav from './components/ingredients-nav/ingredients-nav';
import IngredientList from './components/ingredient-list/ingredient-list';
import { IngredientType, ariaLabels } from '../../utils/variables';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { closeIngredientModal } from '../../services/actions/ingredient';
import { useInView } from 'react-intersection-observer';

const BurgerIngredients = () => {
  const { ingredients } = useSelector((store) => store.ingredients);
  const { selectedIngredient } = useSelector((store) => store.ingredient);
  const dispatch = useDispatch();

  const [currentTab, setCurrentTab] = useState('bun');

  const [bunsRef, inViewBuns] = useInView({ threshold: 0.6 });
  const [saucesRef, inViewSauces] = useInView({ threshold: 0.1 });
  const [mainsRef, inViewMains] = useInView({ threshold: 0.1 });

  const buns = ingredients.filter((ingredient) => ingredient.type === IngredientType.Bun.type);
  const mains = ingredients.filter((ingredient) => ingredient.type === IngredientType.Main.type);
  const sauces = ingredients.filter((ingredient) => ingredient.type === IngredientType.Sauce.type);

  const closeIngredientDetails = useCallback(() => {
    dispatch(closeIngredientModal());
  }, [dispatch]);

  useEffect(() => {
    if (inViewBuns) {
      setCurrentTab('bun');
    } else if (inViewSauces) {
      setCurrentTab('sauce');
    } else if (inViewMains) {
      setCurrentTab('main');
    }
  }, [inViewBuns, inViewMains, inViewSauces]);

  const handleTabClick = useCallback(
    (type) => {
      setCurrentTab(type);
      document.getElementById(type).scrollIntoView({ behavior: 'smooth' });
    },
    [setCurrentTab]
  );

  return (
    <section className={`${styles.ingredients} pt-10`} aria-label={ariaLabels.ingredients}>
      <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>
      <IngredientsNav
        tabs={[IngredientType.Bun, IngredientType.Sauce, IngredientType.Main]}
        current={currentTab}
        handleClick={handleTabClick}
      />
      <div className={`${styles.listsContainer} mt-10`}>
        <IngredientList items={buns} itemsType={IngredientType.Bun} ref={bunsRef} />
        <IngredientList items={sauces} itemsType={IngredientType.Sauce} ref={saucesRef} />
        <IngredientList items={mains} itemsType={IngredientType.Main} ref={mainsRef} />
      </div>

      {selectedIngredient && (
        <Modal heading={'Детали ингредиента'} closeModal={closeIngredientDetails}>
          <IngredientDetails ingredient={selectedIngredient} />
        </Modal>
      )}
    </section>
  );
};

export default BurgerIngredients;
