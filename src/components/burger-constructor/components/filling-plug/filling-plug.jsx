import React from 'react';
import styles from './filling-plug.module.css';

const FillingPlug = ({ hover }) => {
  return (
    <div
      className={
        hover
          ? `${styles.plugContainerOnHover}`
          : `${styles.plugContainer} text text_type_main-large`
      }></div>
  );
};

export default FillingPlug;
