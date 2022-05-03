import React from 'react';
import styles from './main.module.css';
import { data } from '../../utils/data';
import { order } from '../../utils/order';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const Main = () => {
  return (
    <main className={`${styles.main} mb-10`}>
      <BurgerIngredients data={data} />
      <BurgerConstructor order={order} />
    </main>
  );
};

export default Main;
