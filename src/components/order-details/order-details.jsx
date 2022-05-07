import React from 'react';
import styles from './order-details.module.css';
import doneIcon from './images/orderDetails_done_icon.svg';

const OrderDetails = () => {
  return (
    <div className={styles.OrderDetails}>
      <h3 className=' text text_type_digits-large mb-8'>034536</h3>
      <span className='text text_type_main-medium mb-15'>идентификатор заказа</span>
      <img className={`${styles.OrderDetails__icon} mb-15`} src={doneIcon} />
      <p className='text text_type_main-default mb-2'>Ваш заказ начали готовить</p>
      <span className='text text_type_main-default text_color_inactive'>
        Дождитесь готовности на орбитальной станции
      </span>
    </div>
  );
};

export default OrderDetails;
