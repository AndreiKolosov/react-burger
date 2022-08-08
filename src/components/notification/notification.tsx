import React, { FC, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './notification.module.css';
import { CloseIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { INotification } from './notification.props';

const rootNotifications = document.getElementById('notifications');

const Notification: FC<INotification> = ({ heading, message, onRepeatRequest, onClose, canGoHome }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const closeNotification = () => {
    onClose && onClose();
    containerRef?.current?.classList.add(styles.notification_closed);
  };

  return ReactDOM.createPortal(
    <div className={styles.notification} ref={containerRef}>
      <h2 className={`${styles.notification__title} text text_type_main-default mb-4`}>{heading}</h2>
      {message && <p className={`${styles.notification__errMessage} text text_type_main-default mb-10`}>{message}</p>}
      <div className={styles.notification__controls}>
        {onRepeatRequest && (
          <Button type="primary" size="small" onClick={() => onRepeatRequest()}>
            Повторить запрос
          </Button>
        )}
        {canGoHome && (
          <Link className={`${styles.notification__homeLink} text text_type_main-default`} to={'/'}>
            Вернуться на главную
          </Link>
        )}
      </div>
      <button className={styles.notification__closeBtn} onClick={() => closeNotification()}>
        <CloseIcon type="secondary" />
      </button>
    </div>,
    rootNotifications!
  );
};

export default Notification;
