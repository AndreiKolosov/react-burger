import React, { useCallback } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  RegistrationPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  NotFound404,
  IngredientPage,
  OrderFeed,
  OrderInfo,
} from '../../pages';
import ProtectedRoute from '../protected-route/protected-route';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

const ModalSwitch = () => {
  const location = useLocation();
  const background = location.state?.background;
  const history = useHistory();
  // console.log(history);

  const closeModal = useCallback(
    (path) => {
      history.push(path);
      console.log(location);
    },
    [history]
  );

  return (
    <>
      <Switch location={background || location}>
        <Route path='/' exact children={<HomePage />} />
        <Route path='/login' exact children={<LoginPage />} />
        <Route path='/register' exact children={<RegistrationPage />} />
        <Route path='/forgot-password' exact children={<ForgotPasswordPage />} />
        <Route path='/reset-password' exact children={<ResetPasswordPage />} />
        <Route path='/ingredients/:id' exact children={<IngredientPage />} />
        <Route path='/feed' exact children={<OrderFeed />} />
        <Route path='/orders/:id' exact children={<OrderInfo />} />
        <ProtectedRoute path='/profile' children={<ProfilePage />} />
        <Route children={<NotFound404 />} />
      </Switch>

      {background && (
        <Route path='/ingredients/:id'>
          <Modal heading={'Детали ингредиента'} closeModal={() => closeModal('/')}>
            <IngredientDetails />
          </Modal>
        </Route>
      )}
    </>
  );
};

export default ModalSwitch;
