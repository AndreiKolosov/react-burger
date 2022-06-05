import React from 'react';
import styles from './bun-plug.module.css';

const BunPlug = ({ position }) => {
  return (
    <div
      className={
        position === 'top'
          ? `${styles.plugTopContainer} text_type_main-medium`
          : position === 'bottom'
          ? `${styles.plugBottomContainer} text_type_main-medium`
          : `${styles.plugContainer} text_type_main-medium`
      }></div>
  );
};

export default BunPlug;
