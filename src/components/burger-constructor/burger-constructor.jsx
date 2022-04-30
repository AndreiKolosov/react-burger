import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientType } from '../../utils/variables';
import { sortItems } from '../../utils/utils';

const BurgerConstructor = (props) => {
  const bun = sortItems(IngredientType.Bun.type, props.order)[0];
  const filling = [];
  props.order.forEach((item) => {
    if (item.type !== IngredientType.Bun.type) {
      filling.push(item);
    }
  });

  const price = filling.reduce((summ, item) => summ + item.price, bun.price * 2);
  console.log(price);

  return (
    <section className={`${styles.container} pt-25 pl-4`}>
      <ul className={`${styles.ingredientList}`}>
        <li className={`${styles.ingredienItem}`}>
          <ConstructorElement
            type='top'
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        </li>
        <li className={`${styles.ingredienItem}`}>
          <ul className={`${styles.fillingList} mt-4 mb-4`}>
            {filling.map((item, index) => {
              return (
                <li key={index} className={`${styles.fillingItem} mb-4 pr-2`}>
                  <DragIcon />
                  <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image_mobile}
                  />
                </li>
              );
            })}
          </ul>
        </li>
        <li className={`${styles.ingredienItem}`}>
          <ConstructorElement
            type='bottom'
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        </li>
      </ul>
      <div className={`${styles.order} mt-10`}>
        <span className='text text_type_digits-medium mr-10'>
          {price} <CurrencyIcon />
        </span>
        <Button type='primary' size='medium'>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
