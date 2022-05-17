import React from 'react';
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({ handleClick }) => {
  return <div className={styles.overlay} onClick={handleClick}></div>;
};

ModalOverlay.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
