import React, { useCallback, useEffect } from 'react';
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
  OrderHistory,
} from '../../pages';
import ProtectedRoute from '../protected-route/protected-route';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderInfoCard from '../order-info-card/order-info-card';
import Loader from '../loader/loader';
import { useAppSelector } from '../../services/store';

const ModalSwitch = () => {
  const location = useLocation<any>();
  const history = useHistory();
  const background = location?.state?.background;
  const from = location?.state?.from;

  // так при перезагрузке страницы будет открываться отдельная страничка, а не модалка
  // const background = history.action === 'PUSH' && location.state?.background;

  useEffect(() => {}, []);

  const { wsOpen, orders, wsRequest } = useAppSelector((store) => store.ws);
  const closeModal = useCallback(
    (path) => {
      history.push(path);
    },
    [history]
  );

  return (
    <>
      <Switch location={background || location}>
        <Route path="/" exact children={<HomePage />} />
        <Route path="/login" exact children={<LoginPage />} />
        <Route path="/register" exact children={<RegistrationPage />} />
        <Route path="/forgot-password" exact children={<ForgotPasswordPage />} />
        <Route path="/reset-password" exact children={<ResetPasswordPage />} />
        <Route path="/ingredients/:id" exact children={<IngredientPage />} />
        <Route path="/feed" exact children={<OrderFeed />} />
        <Route path="/feed/:id" exact children={<OrderInfo />} />
        <ProtectedRoute path="/profile" exact children={<ProfilePage />} />
        <ProtectedRoute path="/profile/orders" exact children={<OrderHistory />} />
        <ProtectedRoute path="/profile/orders/:id" exact children={<OrderInfo personal />} />
        <Route children={<NotFound404 />} />
      </Switch>

      {background && (
        <Route path="/ingredients/:id" exact>
          <Modal heading={'Детали ингредиента'} closeModal={() => closeModal('/')}>
            <IngredientDetails />
          </Modal>
        </Route>
      )}

      {background && (
        <Route path={`${from}/:id`} exact>
          <Modal closeModal={() => closeModal(`${from}`)}>
            {!wsOpen && wsRequest && <Loader />}
            {wsOpen && orders && <OrderInfoCard />}
          </Modal>
        </Route>
      )}
    </>
  );
};

export default ModalSwitch;
