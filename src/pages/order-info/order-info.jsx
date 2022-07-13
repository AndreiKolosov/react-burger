import React, { useEffect, useCallback } from 'react';
import styles from './order-info.module.css';
import OrderInfoCard from '../../components/order-info-card/order-info-card';
import { wsClose, wsInit, wsInitWithToken, wsResetError } from '../../services/actions/ws';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader/loader';
import { wsUrlWithAuth } from '../../utils/variables';
import Notification from '../../components/notification/notification';

const OrderInfo = ({ personal }) => {
  const dispatch = useDispatch();
  const { orders, wsOpen, wsRequest, wsFailed } = useSelector((store) => store.ws);

  const resetError = useCallback(() => {
    dispatch(wsResetError());
  }, [dispatch]);

  useEffect(() => {
    personal ? dispatch(wsInitWithToken(wsUrlWithAuth)) : dispatch(wsInit());
    return () => {
      dispatch(wsClose());
    };
  }, [dispatch]);

  return (
    <main className={styles.content}>
      {!orders && wsRequest && <Loader />}
      {orders && wsOpen && (
        <section className={styles.OrderInfo}>
          <OrderInfoCard />
        </section>
      )}
      {wsFailed && !orders && (
        <Notification heading='Не удалось загрузить данные...' canGoHome onClose={resetError} />
      )}
    </main>
  );
};

export default OrderInfo;
