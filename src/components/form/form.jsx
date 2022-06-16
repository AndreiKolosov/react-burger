import React from 'react';
import styles from './form.module.css';

const Form = ({ children, title, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h2 className={`${styles.form__title} text text_type_main-medium mb-6`}>{title}</h2>
      {children}
    </form>
  );
};

export default Form;
