import React, { useEffect, useCallback, FC } from 'react';
import styles from './order-info.module.css';
import OrderInfoCard from '../../components/order-info-card/order-info-card';
import { wsClose, wsInit, wsInitWithToken, wsResetError } from '../../services/actions/ws';
import Loader from '../../components/loader/loader';
import Notification from '../../components/notification/notification';
import { getCookie } from '../../utils/cookie';
import { IOrderInfo } from './order-info.props';
import { useAppDispatch, useAppSelector } from '../../services/store';

const OrderInfo: FC<IOrderInfo> = ({ personal }) => {
  const dispatch = useAppDispatch();
  const { orders, wsOpen, wsRequest, wsFailed } = useAppSelector((store) => store.ws);
  const accessToken = getCookie('accessToken');

  const resetError = useCallback(() => {
    dispatch(wsResetError());
  }, [dispatch]);

  useEffect(() => {
    personal
      ? dispatch(wsInitWithToken(`wss://norma.nomoreparties.space/orders?token=${accessToken}`))
      : dispatch(wsInit());
    return () => {
      dispatch(wsClose());
    };
  }, [dispatch, accessToken]);

  return (
    <main className={styles.content}>
      {!orders && wsRequest && <Loader />}
      {orders && wsOpen && (
        <section className={styles.OrderInfo}>
          <OrderInfoCard />
        </section>
      )}
      {wsFailed && !orders && <Notification heading="Не удалось загрузить данные..." canGoHome onClose={resetError} />}
    </main>
  );
};

export default OrderInfo;
