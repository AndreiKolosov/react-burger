import React, { FC, useCallback, useEffect, useState } from 'react';
import styles from './burger-ingredients.module.css';
import IngredientsNav from './components/ingredients-nav/ingredients-nav';
import IngredientList from './components/ingredient-list/ingredient-list';
import { IngredientType, ariaLabels } from '../../utils/variables';
import { useInView } from 'react-intersection-observer';
import { IBurgerIngredients } from './burger-ingredients.props';
import { useAppSelector } from '../../services/store';

const BurgerIngredients: FC<IBurgerIngredients> = () => {
  const { ingredients } = useAppSelector((store) => store.ingredients);

  const [currentTab, setCurrentTab] = useState('bun');

  const [bunsRef, inViewBuns] = useInView({ threshold: 0.6 });
  const [saucesRef, inViewSauces] = useInView({ threshold: 0.1 });
  const [mainsRef, inViewMains] = useInView({ threshold: 0.1 });

  const buns = ingredients.filter((ingredient) => ingredient.type === IngredientType.Bun.type);
  const mains = ingredients.filter((ingredient) => ingredient.type === IngredientType.Main.type);
  const sauces = ingredients.filter((ingredient) => ingredient.type === IngredientType.Sauce.type);

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
      document.getElementById(type)?.scrollIntoView({ behavior: 'smooth' });
    },
    [setCurrentTab]
  );

  return (
    <section className={`${styles.ingredients} pt-10`} aria-label={ariaLabels.ingredients}>
      <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
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
    </section>
  );
};

export default BurgerIngredients;
