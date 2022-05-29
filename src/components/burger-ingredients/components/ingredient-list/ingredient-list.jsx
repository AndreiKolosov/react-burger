import React from 'react';
import PropTypes from 'prop-types';
import styles from './ingredient-list.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import { SET_INGREDIENT } from '../../../../services/actions/ingredient';
import { ADD } from '../../../../services/actions/constructor';
import { useDispatch } from 'react-redux';

const IngredientList = ({ items, itemsType }) => {
  const dispatch = useDispatch();

  return (
    <div className={`${styles.ingredientList__container} mb-10`}>
      <h2 className='text text_type_main-medium' id={itemsType.type}>
        {itemsType.name}
      </h2>
      <ul className={`${styles.ingredientList__list} pr-2 pl-4`}>
        {items.map((item) => (
          <li
            className={styles.ingredientList__item}
            key={item._id}
            onClick={() => {
              dispatch({ type: SET_INGREDIENT, ingredient: item });
              dispatch({ type: ADD, item: item });
            }}>
            <IngredientCard name={item.name} image={item.image} price={item.price} />
          </li>
        ))}
      </ul>
    </div>
  );
};

IngredientList.propTypes = {
  itemsType: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

export default IngredientList;
