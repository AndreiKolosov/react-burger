import React, { FC } from 'react';
import styles from './filling-plug.module.css';

const FillingPlug: FC<{ hover: boolean }> = ({ hover }) => {
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
