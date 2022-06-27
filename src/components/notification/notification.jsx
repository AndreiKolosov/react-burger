import React, { useRef } from 'react';
import styles from './notification.module.css';
import { CloseIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const Notification = ({ message }) => {
  const containerRef = useRef(null);

  const closeNotification = () => {
    containerRef.current.classList.add(styles.notification_closed);
  };

  return (
    <div className={styles.notification} ref={containerRef}>
      <h2 className={`${styles.notification__title} text text_type_main-default mb-4`}>
        Что-то пошло не так... =(
      </h2>
      <p className={`${styles.notification__errMessage} text text_type_main-default mb-10`}>
        {message}
      </p>
      <div className={styles.notification__controls}>
        <Button type='primary' size='small'>
          Повторить запрос
        </Button>
        <Button type='secondary' size='small'>
          Вернуться на главную
        </Button>
      </div>
      <button className={styles.notification__closeBtn} onClick={() => closeNotification()}>
        <CloseIcon type='secondary' />
      </button>
    </div>
  );
};

export default Notification;
