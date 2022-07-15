import React from 'react';
import { useSelector } from 'react-redux';
import OrderCard from './components/order-card/order-card';
import styles from './orders-list.module.css';

const OrdersList = ({ personal }) => {
  const { orders } = useSelector((store) => store.ws);
  if (personal) {
    orders.reverse();
  }

  return (
    <ul className={styles.ordersList}>
      {orders.map((order) => {
        return <OrderCard key={order._id} order={order} />;
      })}
    </ul>
  );
};

export default OrdersList;
