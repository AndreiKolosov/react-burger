import React from 'react';
import styles from './bun-plug.module.css';

const BunPlug = ({ position }) => {
  return (
    <div
      className={
        position === 'top'
          ? `${styles.plugTop} text text_type_main-medium`
          : position === 'bottom'
          ? `${styles.plugBottom}`
          : `${styles.plug} `
      }></div>
  );
};

export default BunPlug;
