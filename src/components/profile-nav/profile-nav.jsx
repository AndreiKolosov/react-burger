import React, { useCallback } from 'react';
import styles from './profile-nav.module.css';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../services/actions/user';

const ProfileNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = useCallback(() => {
    dispatch(logOut());

    history.replace({ path: '/login' });
  }, [dispatch, logOut, history]);

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.nav__list}`}>
        <li>
          <NavLink
            to='/profile'
            exact
            className={`${styles.nav__link} text text_type_main-medium pt-4 pb-4`}
            activeClassName={styles.nav__link_active}>
            Профиль
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profile/orders'
            exact
            className={`${styles.nav__link} text text_type_main-medium pt-4 pb-4`}>
            История заказов
          </NavLink>
        </li>
        <li>
          <button
            onClick={handleLogOut}
            className={`${styles.nav__btn} text text_type_main-medium text_color_inactive pt-4 pb-4`}>
            Выход
          </button>
        </li>
      </ul>
      <p className={`text text_type_main-default text_color_inactive ${styles.nav__hint}`}>
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </nav>
  );
};

export default ProfileNav;
