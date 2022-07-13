import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wsClose, wsInitWithToken, wsResetError } from '../../services/actions/ws';
import { wsUrlWithAuth } from '../../utils/variables';
import styles from './order-history.module.css';
import Loader from '../../components/loader/loader';
import OrdersList from '../../components/orders-list/orders-list';
import ProfileNav from '../../components/profile-nav/profile-nav';
import Notification from '../../components/notification/notification';

const OrderHistory = () => {
  const dispatch = useDispatch();
  const { orders, wsRequest, wsFailed } = useSelector((store) => store.ws);

  const resetError = useCallback(() => {
    dispatch(wsResetError());
  }, [dispatch]);

  useEffect(() => {
    dispatch(wsInitWithToken(wsUrlWithAuth));
    return () => {
      dispatch(wsClose());
    };
  }, [dispatch]);

  return (
    <main className={styles.content}>
      <aside className={styles.sidebar}>
        <ProfileNav />
      </aside>
      {wsRequest && !wsFailed && <Loader />}
      {!wsRequest && !wsFailed && orders && (
        <section className={styles.history}>
          <OrdersList personal />
        </section>
      )}
      {wsFailed && !orders && (
        <Notification heading='Не удалось загрузить данные...' canGoHome onClose={resetError} />
      )}
    </main>
  );
};

export default OrderHistory;
