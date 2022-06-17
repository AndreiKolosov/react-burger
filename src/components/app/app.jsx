import React from 'react';
import AppHeader from '../app-header/app-header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  RegistrationPage,
  ForgotPasswordPage,
  ResetPasswordPage,
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
