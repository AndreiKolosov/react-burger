import React, { FC } from 'react';
import styles from './modal-overlay.module.css';
import { IModalOverlay } from './modal-overlay.props';

const ModalOverlay: FC<IModalOverlay> = ({ handleClick }) => {
  return <div className={styles.overlay} onClick={handleClick}></div>;
};

export default ModalOverlay;
