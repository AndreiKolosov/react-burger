import React from 'react';
import { useSelector } from 'react-redux';
import OrderCard from './components/order-card/order-card';
import styles from './orders-list.module.css';

const OrdersList = () => {
  const { orders } = useSelector((store) => store.ws);

  return (
    <ul className={styles.ordersList}>
      {orders.map((order) => {
        return (
          <OrderCard
            key={order._id}
            number={order.number}
            time={order.createdAt}
            name={order.name}
            ingredientsIds={order.ingredients}
          />
        );
      })}
    </ul>
  );
};

export default OrdersList;
