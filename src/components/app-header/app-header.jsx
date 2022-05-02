import React from 'react';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

const AppHeader = () => {
  return (
    <header className={`${styles.header} pt-4 pb-4 mt-10`}>
      <nav className={`${styles.navigation}`}>
        <div className={`${styles.container}`}>
          <menu className={`${styles.menuList} pt-4 pb-4`}>
            <li className='pt-4 pr-5 pb-4 pl-5'>
              <a href='/#' className={`${styles.linkActive} text text_type_main-default`}>
                <BurgerIcon />
                <span className='ml-2'>Конструктор</span>
              </a>
            </li>
            <li className='pt-4 pr-5 pb-4 pl-5 ml-2'>
              <a href='/#' className={`${styles.link} text text_type_main-default`}>
                <ListIcon />
                <span className='ml-2'>Лента заказов</span>
              </a>
            </li>
          </menu>
          <div className='pt-2 pb-2'>
            <Logo />
          </div>
        </div>
        <a href='/#' className={`${styles.link} text text_type_main-default`}>
          <ProfileIcon type='secondary' />
          <span className='ml-2'>Личный кабинет</span>
        </a>
      </nav>
    </header>
  );
};

export default AppHeader;