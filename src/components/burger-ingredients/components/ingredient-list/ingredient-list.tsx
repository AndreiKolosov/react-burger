import React, { forwardRef } from 'react';
import styles from './ingredient-list.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import { IIngredientList } from './ingredient-list.props';

const IngredientList = forwardRef<HTMLUListElement, IIngredientList>(({ items, itemsType }, ref) => {
  return (
    <div className={`${styles.ingredientList__container} mb-10`}>
      <h2 className="text text_type_main-medium" id={itemsType.type}>
        {itemsType.name}
      </h2>
      <ul className={`${styles.ingredientList__list} pr-2 pl-4`} ref={ref}>
        {items.map((item) => (
          <li className={styles.ingredientList__item} key={item._id}>
            <IngredientCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default IngredientList;
