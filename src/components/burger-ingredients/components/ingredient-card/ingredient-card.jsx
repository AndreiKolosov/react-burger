import React from 'react';
import PropTypes from 'prop-types';
import styles from './ingredient-card.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCard = (props) => {
  return (
    <div className={`${styles.card} pl-4 pr-4`}>
      <Counter count={1} size='default' />
      <img className='' src={props.image} alt={props.name} />
      <p className={`text text_type_digits-default mt-1 mb-1`}>
        {props.price} <CurrencyIcon />
      </p>
      <h3 className={`text text_type_main-default`}>{props.name}</h3>
    </div>
  );
};

IngredientCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default IngredientCard;
