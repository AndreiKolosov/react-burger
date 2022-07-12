import React, { useEffect } from 'react';
import styles from './order-info.module.css';
import OrderInfoCard from '../../components/order-info-card/order-info-card';
import { wsClose, wsInit } from '../../services/actions/ws';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader/loader';

const OrderInfo = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.ws);

  useEffect(() => {
    dispatch(wsInit());
    return () => {
      dispatch(wsClose());
    };
  }, [dispatch]);

  return (
    <main className={styles.content}>
      {!orders && <Loader />}
      {orders && (
        <section className={styles.OrderInfo}>
          <OrderInfoCard />
        </section>
      )}
    </main>
  );
};

export default OrderInfo;
