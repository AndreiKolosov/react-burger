import React from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './submit-btn.module.css';

const SubmitButton = ({ title, name, disabled, gap }) => {
  return (
    <div className={`${styles.container} ${gap}`}>
      <Button type='primary' size='medium' disabled={disabled} htmlType='submit' name={name}>
        {title}
      </Button>
    </div>
  );
};

export default SubmitButton;
