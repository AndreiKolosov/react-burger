import React, { FC } from 'react';
import styles from './modal-overlay.module.css';
import { IModalOverlay } from '../../utils/interfaces';

const ModalOverlay: FC<IModalOverlay> = ({ handleClick }) => {
  return <div className={styles.overlay} onClick={handleClick}></div>;
};

export default ModalOverlay;
