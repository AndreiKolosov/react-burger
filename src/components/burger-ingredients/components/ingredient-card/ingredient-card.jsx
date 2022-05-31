import React from 'react';
import PropTypes from 'prop-types';
import styles from './ingredient-card.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { SET_INGREDIENT } from '../../../../services/actions/ingredient';
import { ADD } from '../../../../services/actions/constructor';
import { useDispatch } from 'react-redux';

const IngredientCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`${styles.card} pl-4 pr-4`}
      onClick={() => {
        dispatch({ type: SET_INGREDIENT, ingredient: item });
        dispatch({ type: ADD, item: item });
      }}>
      <Counter count={1} size='default' />
      <img className='' src={item.image} alt={item.name} />
      <p className={`text text_type_digits-default mt-1 mb-1`}>
        {item.price} <CurrencyIcon />
      </p>
      <h3 className={`text text_type_main-default`}>{item.name}</h3>
    </div>
  );
};

IngredientCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default IngredientCard;
