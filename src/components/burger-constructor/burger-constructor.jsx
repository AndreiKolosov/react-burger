import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './burger-constructor.module.css';
import { postOrder, resetOrderError } from '../../services/actions/order';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ariaLabels } from '../../utils/variables';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import Loader from '../loader/loader';
import { closeOrderModal } from '../../services/actions/order';
import { dropItem, removeItem, resetConstructor } from '../../services/actions/constructor';
import { useDrop } from 'react-dnd';
import BurgerPlug from './components/burger-plug/burger-plug';
import FillingPlug from './components/filling-plug/filling-plug';
import BunPlug from './components/bun-plug/bun-plug';
import FillingElement from './components/filling-element/filling-element';
import { useHistory, Redirect } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';
import Notification from '../notification/notification';

const BurgerConstructor = () => {
  const { bun, filling, totalPrice, orderIds } = useSelector((store) => store.burgerConstructor);
  const { orderRequest, orderFailed, orderNumber } = useSelector((store) => store.order);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const accessToken = getCookie('accessToken');

  const closeOrderDetails = useCallback(() => {
    dispatch(closeOrderModal());
    dispatch(resetConstructor());
  }, [dispatch]);

  const resetError = useCallback(() => {
    dispatch(resetOrderError());
  }, [dispatch]);

  const postNewOrder = (orderData) => {
    user && dispatch(postOrder({ accessToken: `Bearer ${accessToken}`, order: orderData }));
    !user &&
      history.replace({
        pathname: '/login',
        state: {
          from: {
            pathname: '/',
          },
        },
      });
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    drop({ item }) {
      dispatch(dropItem(item));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const handleDelete = (item) => {
    dispatch(removeItem({ item }));
  };

  // Аналог того, что происходит с totalPrice в reducer
  // const price = useMemo(() => {
  //   return (bun ? bun.price * 2 : 0) + filling.reduce((acc, item) => acc + item.price, 0);
  // }, [order]);

  return (
    <section className={`${styles.container} pt-25 pl-4`} aria-label={ariaLabels.constructor}>
      <ul className={`${styles.ingredientList}`} ref={dropTarget}>
        {!bun && filling.length === 0 && <BurgerPlug hover={isHover} />}
        {!bun && filling.length > 0 && <BunPlug position="top" hover={isHover} />}
        {bun && (
          <li className={`ml-4`}>
            <ConstructorElement type="top" isLocked={true} text={`${bun.name} (верх)`} price={bun.price} thumbnail={bun.image_mobile} />
          </li>
        )}
        {filling.length === 0 && bun && <FillingPlug hover={isHover} />}
        {filling.length > 0 && (
          <li>
            <ul className={`${styles.fillingList} mt-4 mb-4`}>
              {filling.map((item, index) => (
                <FillingElement item={item} deleteHandler={handleDelete} index={index} key={item.uId} />
              ))}
            </ul>
          </li>
        )}
        {!bun && filling.length > 0 && <BunPlug position="bottom" hover={isHover} />}
        {bun && (
          <li className={`ml-4`}>
            <ConstructorElement type="bottom" isLocked={true} text={`${bun.name} (низ)`} price={bun.price} thumbnail={bun.image_mobile} />
          </li>
        )}
      </ul>
      <div className={`${styles.order} mt-10`}>
        <span className="text text_type_digits-medium mr-10">
          {totalPrice} <CurrencyIcon />
        </span>
        <Button type="primary" size="medium" disabled={bun && filling.length > 0 ? false : true} onClick={() => postNewOrder(orderIds)}>
          Оформить заказ
        </Button>
      </div>

      {orderRequest && (
        <Modal closeModal={closeOrderDetails}>
          <Loader />
        </Modal>
      )}

      {orderNumber && (
        <Modal closeModal={closeOrderDetails}>
          <OrderDetails />
        </Modal>
      )}

      {orderFailed && <Notification heading="Что-то пошло не так =(" message="Ошибка при оформлении заказа." onClose={resetError} />}
    </section>
  );
};

export default BurgerConstructor;
