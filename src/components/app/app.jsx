import React, { useEffect } from 'react';
import Loader from '../loader/loader';
import AppHeader from '../app-header/app-header';
import ProtectedRoute from '../protected-route/protected-route';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { checkAuth } from '../../services/actions/user';
import {
  HomePage,
  LoginPage,
  RegistrationPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  NotFound404,
  IngredientPage,
} from '../../pages';

function App() {
  const dispatch = useDispatch();
  const { isAuthChecked } = useSelector((store) => store.user);
  const loaderWrapperStyles = {
    display: 'flex',
    justifyContent: 'center',
  };
  useEffect(() => {
    dispatch(checkAuth());
    dispatch(getIngredients());
  }, [dispatch]);
  return (
    <>
      {!isAuthChecked && (
        <div style={loaderWrapperStyles}>
          <Loader />
        </div>
      )}
      {isAuthChecked && (
        <Router basename='/react-burger'>
          <AppHeader />
          <Switch>
            <Route path='/' exact children={<HomePage />} />
            <Route path='/login' exact children={<LoginPage />} />
            <Route path='/register' exact children={<RegistrationPage />} />
            <Route path='/forgot-password' exact children={<ForgotPasswordPage />} />
            <Route path='/reset-password' exact children={<ResetPasswordPage />} />
            <Route path='/ingredients/:id' exact children={<IngredientPage />} />
            <ProtectedRoute path='/profile' children={<ProfilePage />} />
            <Route children={<NotFound404 />} />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
