import React, { FC } from 'react';
import styles from './burger-plug.module.css';
import { IBurgerPlug } from '../../../../utils/interfaces';
const BurgerPlug: FC<IBurgerPlug> = ({ hover }) => {
  return (
    <div className={hover ? `${styles.plugContainerOnHover}` : `${styles.plugContainer} text text_type_main-large`}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="#c9c1ec"
        className={`${styles.plugSvg}`}>
        <title>burger</title>
        <path
          className={hover ? `${styles.plugTopBunOnHover}` : undefined}
          d="M56,18.08h0A14.08,14.08,0,0,0,41.92,4H22.08A14.08,14.08,0,0,0,8,18.08H8A1.92,1.92,0,0,0,9.92,20H54.08A1.92,1.92,0,0,0,56,18.08ZM14.54,14.63a1,1,0,1,1,1-1A1,1,0,0,1,14.54,14.63Zm6.79.75a1,1,0,1,1,1-1A1,1,0,0,1,21.33,15.38Zm0-5.37a1,1,0,1,1,1-1A1,1,0,0,1,21.33,10Zm7.35,3a1,1,0,1,1,1-1A1,1,0,0,1,28.68,13Zm6.64,0a1,1,0,1,1,1-1A1,1,0,0,1,35.32,13Zm7.35,2.38a1,1,0,1,1,1-1A1,1,0,0,1,42.67,15.38Zm0-5.37a1,1,0,1,1,1-1A1,1,0,0,1,42.67,10Zm6.79,4.63a1,1,0,1,1,1-1A1,1,0,0,1,49.46,14.63Z"
        />
        <path
          className={hover ? `${styles.plugBottomBunOnHover}` : undefined}
          d="M13.58,60H50.43A5.57,5.57,0,0,0,56,54.43,2.43,2.43,0,0,0,53.58,52H10.43A2.43,2.43,0,0,0,8,54.43,5.57,5.57,0,0,0,13.58,60Z"
        />
        <path d="M13,48H51a3,3,0,0,0,3-3,1,1,0,0,0-1-1H52a1,1,0,0,0-1,1,1,1,0,0,1-2,0,1,1,0,0,0-2,0,1,1,0,0,1-2,0,1,1,0,0,0-2,0,1,1,0,0,1-2,0,1,1,0,0,0-2,0,1,1,0,0,1-2,0,1,1,0,0,0-2,0,1,1,0,0,1-2,0,1,1,0,0,0-2,0,1,1,0,0,1-2,0,1,1,0,0,0-2,0,1,1,0,0,1-2,0,1,1,0,0,0-2,0,1,1,0,0,1-2,0,1,1,0,0,0-2,0,1,1,0,0,1-2,0,1,1,0,0,0-2,0,1,1,0,0,1-2,0,1,1,0,0,0-1-1H11a1,1,0,0,0-1,1A3,3,0,0,0,13,48Z" />
        <rect x="10" y="36" width="43.67" height="4" rx="1.72" ry="1.72" />
        <path d="M17,24h-.17C13,24,10,25.46,10,27.27s3,3.27,6.79,3.27l.77,0a4.62,4.62,0,0,1,2.06.37,11.72,11.72,0,0,0,4.47.81,13.58,13.58,0,0,0,2.12-.16,5,5,0,0,1,2.22.15,13.23,13.23,0,0,0,7.14,0,5,5,0,0,1,2.22-.15,13.58,13.58,0,0,0,2.12.16,11.81,11.81,0,0,0,4.4-.78,4.75,4.75,0,0,1,2-.38h.49c3.75,0,6.79-1.46,6.79-3.27S50.54,24,46.79,24H17Z" />
      </svg>
    </div>
  );
};

export default BurgerPlug;