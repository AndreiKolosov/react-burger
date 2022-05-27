import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { ariaLables } from '../../utils/variables';

const BurgerConstructor = ({ onOrderConfirmClick }) => {
  const { bun, filling, totalPrice } = useSelector((store) => store.burgerConstructor);

  const dispatch = useDispatch();

  return (
    <section className={`${styles.container} pt-25 pl-4`} aria-label={ariaLables.constructor}>
      <ul className={`${styles.ingredientList}`}>
        {bun && (
          <li className={`${styles.ingredienItem} ml-4`}>
            <ConstructorElement
              type='top'
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
          </li>
        )}
        {filling && (
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
                      handleClose={() => {
                        dispatch({ type: 'DELETE', item: item });
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </li>
        )}
        {bun && (
          <li className={`${styles.ingredienItem} ml-4`}>
            <ConstructorElement
              type='bottom'
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
          </li>
        )}
      </ul>
      <div className={`${styles.order} mt-10`}>
        <span className='text text_type_digits-medium mr-10'>
          {totalPrice} <CurrencyIcon />
        </span>
        <Button type='primary' size='medium' onClick={onOrderConfirmClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  onOrderConfirmClick: PropTypes.func.isRequired,
};

export default BurgerConstructor;
