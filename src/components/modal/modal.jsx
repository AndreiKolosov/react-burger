import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';

const rootModals = document.getElementById('modals');

const Modal = ({ handleCloseClick, handleKeydown, handleOverlayClick, heading, children }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    <section className={styles.popup}>
      <div className={`${styles.popup__container} pt-30 pb-30`}>
        {heading && <h2>{heading}</h2>}
        {children}
        <button className={styles.popup__closeButton} onClick={handleCloseClick}>
          <CloseIcon type='primary' />
        </button>
      </div>
      <ModalOverlay handleClick={handleOverlayClick} />
    </section>,
    rootModals
  );
};

Modal.propTypes = {
  handleCloseClick: PropTypes.func.isRequired,
  handleKeydown: PropTypes.func.isRequired,
  handleOverlayClick: PropTypes.func.isRequired,
  heading: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Modal;
