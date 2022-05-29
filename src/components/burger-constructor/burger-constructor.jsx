import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './burger-constructor.module.css';
import { postOrderRequest } from '../../services/actions/order';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { ariaLables } from '../../utils/variables';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import Loader from '../loader/loader';
import { CLOSE_ORDER_DETAILS } from '../../services/actions/order';

const BurgerConstructor = () => {
  const { bun, filling, totalPrice, order } = useSelector((store) => store.burgerConstructor);
  const { orderRequest, orderFaild, orderNumber } = useSelector((store) => store.order);

  const dispatch = useDispatch();

  const closeOrderDetails = () => {
    dispatch({ type: CLOSE_ORDER_DETAILS });
  };

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
        <Button type='primary' size='medium' onClick={() => dispatch(postOrderRequest(order))}>
          Оформить заказ
        </Button>
      </div>

      {orderNumber && (
        <Modal closeModal={closeOrderDetails}>
          {orderRequest && !orderFaild && <Loader />}
          {!orderRequest && !orderFaild && <OrderDetails />}
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
