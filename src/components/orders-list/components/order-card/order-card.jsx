import React from 'react';
import styles from './order-card.module.css';
import { Link } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderCard = ({ data }) => {
  return (
    <li className={styles.card}>
      <Link className={styles.card__link}>
        <div className={styles.card__header}>
          <p className={styles.card__orderNumber}></p>
          <span className={styles.card__orderTime}></span>
        </div>
        <h2 className={styles.card__burgerName}></h2>
        <div className={styles.card__burgerComposition}>
          <ul className={styles.card__ingredientsList}></ul>
          <p className={styles.card__price}>
            <span className={styles.card__totalPrice}></span>
            <CurrencyIcon type='primary' />
          </p>
        </div>
      </Link>
    </li>
  );
};

export default OrderCard;
