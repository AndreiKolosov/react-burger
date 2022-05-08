import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientType, ariaLables } from '../../utils/variables';
import { sortItems } from '../../utils/utils';
import { ingridientPropType } from '../../utils/prop-types';

const BurgerConstructor = (props) => {
  const bun = sortItems(IngredientType.Bun.type, props.order)[0]; // Можно лучше?
  const filling = [];
  props.order.forEach((item) => {
    if (item.type !== IngredientType.Bun.type) {
      filling.push(item);
    }
  });
  const price = filling.reduce((summ, item) => summ + item.price, bun.price * 2);
  return (
    <section className={`${styles.container} pt-25 pl-4`} aria-label={ariaLables.constructor}>
      <ul className={`${styles.ingredientList}`}>
        <li className={`${styles.ingredienItem} ml-4`}>
          <ConstructorElement
            type='top'
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        </li>
        <li className={`${styles.ingredienItem}`}>
          <ul className={`${styles.fillingList} mt-4 mb-4`}>
            {filling.map((item) => {
              return (
                <li key={item._id} className={`${styles.fillingItem} mb-4 pr-2`}>
                  <div className={`mr-2`}>
                    <DragIcon />
                  </div>
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
        <li className={`${styles.ingredienItem} ml-4`}>
          <ConstructorElement
            type='bottom'
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        </li>
      </ul>
      <div className={`${styles.order} mt-10`}>
        <span className='text text_type_digits-medium mr-10'>
          {price} <CurrencyIcon />
        </span>
        <Button type='primary' size='medium' onClick={props.onOrderConfirmClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  order: PropTypes.arrayOf(ingridientPropType.isRequired).isRequired,
};

export default BurgerConstructor;
