import React, { useRef } from 'react';
import styles from './notification.module.css';
import { CloseIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Notification = ({ heading, message, onRepeatRequest, onClose, canGoHome }) => {
  const containerRef = useRef(null);

  const closeNotification = () => {
    onClose && onClose();
    containerRef.current.classList.add(styles.notification_closed);
  };

  return (
    <div className={styles.notification} ref={containerRef}>
      <h2 className={`${styles.notification__title} text text_type_main-default mb-4`}>
        {heading}
      </h2>
      {message && (
        <p className={`${styles.notification__errMessage} text text_type_main-default mb-10`}>
          {message}
        </p>
      )}
      <div className={styles.notification__controls}>
        {onRepeatRequest && (
          <Button type='primary' size='small' onClick={() => onRepeatRequest()}>
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
        <CloseIcon type='secondary' />
      </button>
    </div>
  );
};

Notification.propTypes = {
  heading: PropTypes.string.isRequired,
  message: PropTypes.string,
  onRepeatRequest: PropTypes.func,
  onClose: PropTypes.func,
  canGoHome: PropTypes.bool,
};

export default Notification;
