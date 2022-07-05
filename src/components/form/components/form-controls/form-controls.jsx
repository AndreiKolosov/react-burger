import React from 'react';
import styles from './form-controls.module.css';

const FormControls = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default FormControls;
