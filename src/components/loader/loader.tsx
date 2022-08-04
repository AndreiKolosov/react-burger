import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import styles from './loader.module.css';

const Loader: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
  return (
    <>
      <div className={`${styles.dualRing} pt-30`}></div>
    </>
  );
};

export default Loader;
