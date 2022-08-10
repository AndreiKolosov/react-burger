import React, { FC } from 'react';
import styles from './form-controls.module.css';
import { IFormControls } from './form-controls.props';

const FormControls: FC<IFormControls> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default FormControls;
