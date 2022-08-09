import React, { FC, useCallback, useEffect } from 'react';
import styles from './order-feed.module.css';
import OrdersList from '../../components/orders-list/orders-list';
import OrderStatistic from '../../components/order-statistic/order-statistic';
import { wsClose, wsInit, wsResetError } from '../../services/actions/ws';
import Loader from '../../components/loader/loader';
import Notification from '../../components/notification/notification';
import { IOrderFeed } from './order-feed.props';
import { useAppDispatch, useAppSelector } from '../../services/store';

const OrderFeed: FC<IOrderFeed> = () => {
  const dispatch = useAppDispatch();

  const { orders, wsRequest, wsFailed } = useAppSelector((store) => store.ws);

  const resetError = useCallback(() => {
    dispatch(wsResetError());
  }, [dispatch]);

  useEffect(() => {
    dispatch(wsInit());
    return () => {
      dispatch(wsClose());
    };
  }, [dispatch]);
  return (
    <main className={styles.content}>
      {wsRequest && !wsFailed && <Loader />}
      {!wsRequest && !wsFailed && orders && (
        <section className={styles.feed}>
          <h2 className={`${styles.feed__title} text text_type_main-large mt-10 mb-5 ml-2`}>Лента заказов</h2>
          <div className={styles.feed__content}>
            <OrdersList />
            <OrderStatistic />
          </div>
        </section>
      )}
      {wsFailed && !orders && <Notification heading="Не удалось загрузить данные..." canGoHome onClose={resetError} />}
    </main>
  );
};

export default OrderFeed;
