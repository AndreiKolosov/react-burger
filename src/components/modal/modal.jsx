import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';

const rootModals = document.getElementById('modals');

const Modal = ({ closeModal, handleKeydown, heading, children }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    <section className={styles.popup}>
      <div className={`${styles.popup__container}`}>
        {heading && (
          <h2 className={`${styles.popup__heading} text text_type_main-large`}>{heading}</h2>
        )}
        <button className={styles.popup__closeButton} onClick={closeModal}>
          <CloseIcon type='primary' />
        </button>

        {children}
      </div>
      <ModalOverlay handleClick={closeModal} />
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
