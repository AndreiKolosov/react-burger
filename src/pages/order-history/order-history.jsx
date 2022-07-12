import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wsClose, wsInitWithToken } from '../../services/actions/ws';
import { getCookie } from '../../utils/cookie';
import styles from './order-history.module.css';
import Loader from '../../components/loader/loader';
import OrdersList from '../../components/orders-list/orders-list';
import ProfileNav from '../../components/profile-nav/profile-nav';

const OrderHistory = () => {
  const dispatch = useDispatch();
  const accessToken = getCookie('accessToken');
  const url = `wss://norma.nomoreparties.space/orders?token=${accessToken}`;
  const { orders, wsRequest, wsFailed } = useSelector((store) => store.ws);

  useEffect(() => {
    dispatch(wsInitWithToken(url));
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
    </main>
  );
};

export default OrderHistory;
