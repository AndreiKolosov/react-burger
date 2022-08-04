import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from './components/modal-overlay/modal-overlay';
import { IModal } from '../../utils/interfaces';

const rootModals = document.getElementById('modals');

const Modal: FC<IModal> = ({ closeModal, heading, children }) => {
  useEffect(() => {
    const closeModalByEsc = (e: KeyboardEvent) => {
      e.key === 'Escape' && closeModal();
    };

    document.addEventListener('keydown', closeModalByEsc);

    return () => {
      document.removeEventListener('keydown', closeModalByEsc);
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    <section className={styles.popup}>
      <div className={`${styles.popup__container}`}>
        {heading && <h2 className={`${styles.popup__heading} text text_type_main-large`}>{heading}</h2>}
        <button className={styles.popup__closeButton} onClick={closeModal}>
          <CloseIcon type="primary" />
        </button>

        {children}
      </div>
      <ModalOverlay handleClick={closeModal} />
    </section>,
    rootModals!
  );
};

export default Modal;
