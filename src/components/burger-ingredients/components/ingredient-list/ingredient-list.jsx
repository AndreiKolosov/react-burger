import React from 'react';
import propTypes from 'prop-types';
import styles from './ingredient-list.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';

const IngredientList = ({ items, itemsType, onIngredientClick }) => {
  return (
    <div className={`${styles.ingredientList__container} mb-10`}>
      <h2>{itemsType.name}</h2>
      <ul className={`${styles.ingredientList__list} pr-2 pl-4`}>
        {items.map((item) => (
          <li
            className={styles.ingredientList__item}
            key={item._id}
            onClick={() => onIngredientClick(item)}>
            <IngredientCard name={item.name} image={item.image} price={item.price} />
          </li>
        ))}
      </ul>
    </div>
  );
};

IngredientList.propTypes = {
  itemsType: propTypes.object.isRequired,
  items: propTypes.array.isRequired,
};

export default IngredientList;
