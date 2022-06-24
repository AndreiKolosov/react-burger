import React from 'react';
import AppHeader from '../app-header/app-header';
import ProtectedRoute from '../protected-route/protected-route';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
  return (
    <>
      <Router>
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
    </>
  );
}

export default App;
