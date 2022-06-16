import React from 'react';
import styles from './input-container.module.css';

const InputContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default InputContainer;
