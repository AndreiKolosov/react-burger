import React, { useEffect } from 'react';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AppHeader = () => {
  const { pathname } = useLocation();
  const { user } = useSelector((store) => store.user);

  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={`${styles.navigation}`}>
        <div className={`${styles.container}`}>
          <menu className={`${styles.menuList} pt-4 pb-4`}>
            <li className='pt-4 pr-5 pb-4 pl-5'>
              <NavLink
                to='/'
                exact
                className={`${styles.link} text text_type_main-default`}
                activeClassName={styles.link_active}>
                <BurgerIcon type={pathname === '/' ? 'primary' : 'secondary'} />
                <span className='ml-2'>Конструктор</span>
              </NavLink>
            </li>
            <li className='pt-4 pr-5 pb-4 pl-5 ml-2'>
              <NavLink
                to='/feed'
                exact
                className={`${styles.link} text text_type_main-default`}
                activeClassName={styles.link_active}>
                <ListIcon type={pathname === '/feed' ? 'primary' : 'secondary'} />
                <span className='ml-2'>Лента заказов</span>
              </NavLink>
            </li>
          </menu>
          <div className='pt-2 pb-2'>
            <Logo />
          </div>
        </div>
        <NavLink
          to='/profile'
          exact
          className={`${styles.link} text text_type_main-default`}
          activeClassName={styles.link_active}>
          <ProfileIcon type={pathname === '/profile' ? 'primary' : 'secondary'} />
          <span className='ml-2'>{user?.name || 'Личный кабинет'}</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;
