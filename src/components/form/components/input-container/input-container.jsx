import React from 'react';
import styles from './input-container.module.css';

const InputContainer = ({ children, gap }) => {
  return <div className={`${styles.container} ${gap}`}>{children}</div>;
};

export default InputContainer;
