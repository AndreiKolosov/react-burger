import React, { FC } from 'react';
import styles from './loader.module.css';

const Loader: FC = () => {
  return (
    <>
      <div className={`${styles.dualRing} pt-30`}></div>
    </>
  );
};

export default Loader;
