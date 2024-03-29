import React, { FC } from 'react';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import styles from './ingredient.module.css';
import { IIngredientPage } from './ingredient.props';

const IngredientPage: FC<IIngredientPage> = () => {
  return (
    <main className={styles.content}>
      <section className={styles.ingredient}>
        <h2 className={`${styles.ingredientTitle} text text_type_main-large`}>Детали ингредиента</h2>
        <IngredientDetails />
      </section>
    </main>
  );
};

export default IngredientPage;
