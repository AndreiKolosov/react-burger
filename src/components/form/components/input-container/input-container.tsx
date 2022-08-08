import React, { FC } from 'react';
import styles from './input-container.module.css';
import { IInputContainer } from './input-container.props';

const InputContainer: FC<IInputContainer> = ({ children, gap }) => {
  return <div className={`${styles.container} ${gap}`}>{children}</div>;
};

export default InputContainer;
