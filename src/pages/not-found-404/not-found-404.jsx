import React from 'react';
import styles from './not-found-404.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

const NotFound404 = () => {
  return (
    <main className={styles.content}>
      <div className={styles.scene}>
        <div className={styles.ufo}>
          <div className={styles.ufo__head}></div>
          <div className={styles.ufo__plate}>
            <div className={styles.ufo__rings}>
              <div className={styles.ufo__ring}></div>
              <div className={styles.ufo__ring}></div>
              <div className={styles.ufo__ring}></div>
            </div>
          </div>
          <div className={styles.ufo__lightColumn}></div>
        </div>

        <div className={styles.ground}>
          <div className={styles.buble}></div>
          <div className={styles.cow}></div>
          <div className={styles.meadow}></div>
          <p className={styles.mistakeText}>Oops! Looks like we lost another cow ¯\_(ツ)_/</p>
        </div>
      </div>

      <section className={styles.error}>
        <h2 className={styles.errorMessage}>
          Похоже, страница, которую вы ищете, не существует...
        </h2>
        <p className={styles.errorCode}>404</p>
        <Button type='primary' size='large'>
          Вернуться домой
        </Button>
      </section>
    </main>
  );
};

export default NotFound404;
