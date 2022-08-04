import React, { FC } from 'react';
import { IBunPlug } from '../../../../utils/interfaces';
import styles from './bun-plug.module.css';

const BunPlug: FC<IBunPlug> = ({ position, hover }) => {
  return (
    <div
      className={
        hover && position === 'top'
          ? ` ${styles.plugContainerOnHover}  ${styles.plugTopContainer} text_type_main-medium`
          : hover && position === 'bottom'
          ? ` ${styles.plugContainerOnHover}  ${styles.plugBottomContainer} text_type_main-medium`
          : position === 'top'
          ? `${styles.plugTopContainer} text_type_main-medium`
          : position === 'bottom'
          ? `${styles.plugBottomContainer} text_type_main-medium`
          : `${styles.plugContainer} text_type_main-medium`
      }></div>
  );
};

export default BunPlug;
