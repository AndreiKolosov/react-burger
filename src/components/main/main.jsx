import React from 'react';
import styles from './main.module.css';
import { data } from '../../utils/data';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const Main = () => {
  return (
    <main className={styles.main}>
      <BurgerIngredients data={data} />
      <BurgerConstructor />
    </main>
  );
};

export default Main;
