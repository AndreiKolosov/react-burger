import React from 'react';
import styles from './order-card.module.css';
import { Link } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderCard = () => {
  return (
    <li className={styles.card}>
      <Link className={styles.card__link}>
        <div className={styles.card__header}>
          <p className={`${styles.card__orderNumber} text text_type_digits-default`}>#034535</p>
          <span
            className={`${styles.card__orderTime} text text_type_main-default text_color_inactive`}>
            Сегодня, 16:20 i-GMT+3
          </span>
        </div>
        <h2 className={`${styles.card__burgerName} text text_type_main-medium`}>
          Death Star Starship Main бургер
        </h2>
        <div className={styles.card__burgerComposition}>
          <ul className={styles.card__ingredientsList}>
            <li className={styles.card__ingredientItem}>
              <div className={styles.card__ingredientIcon}></div>
            </li>
            <li className={styles.card__ingredientItem}>
              <div className={styles.card__ingredientIcon}></div>
            </li>
            <li className={styles.card__ingredientItem}>
              <div className={styles.card__ingredientIcon}></div>
            </li>
            <li className={styles.card__ingredientItem}>
              <div className={styles.card__ingredientIcon}></div>
            </li>
            <li className={styles.card__ingredientItem}>
              <div className={styles.card__ingredientIcon}></div>
            </li>
          </ul>
          <div className={styles.card__price}>
            <span className={`${styles.card__totalPrice} text text_type_digits-default`}>480</span>
            <CurrencyIcon type='primary' />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default OrderCard;
