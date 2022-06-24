import React from 'react';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import styles from './ingredient.module.css';
import { useSelector } from 'react-redux';

const IngredientPage = () => {
  return (
    <main className={styles.content}>
      <section className={styles.ingredient}>
        <IngredientDetails />
      </section>
    </main>
  );
};

export default IngredientPage;
