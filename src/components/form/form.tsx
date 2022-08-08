import React, { FC } from 'react';
import styles from './form.module.css';
import { IForm } from './form.props';

const Form: FC<IForm> = ({ children, title, onSubmit, name }) => {
  return (
    <form onSubmit={onSubmit} className={styles.form} name={name}>
      <h2 className={`${styles.form__title} text text_type_main-medium mb-6`}>{title}</h2>
      {children}
    </form>
  );
};

export default Form;
