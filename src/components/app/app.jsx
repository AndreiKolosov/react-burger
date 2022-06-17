import React from 'react';
import AppHeader from '../app-header/app-header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage, RegistrationPage, ForgotPasswordPage } from '../../pages';

function App() {
  return (
    <>
      <AppHeader />
      <Router>
        <Switch>
          <Route path='/' exact children={<HomePage />} />
          <Route path='/login' exact children={<LoginPage />} />
          <Route path='/register' exact children={<RegistrationPage />} />
          <Route path='/forgot-password' exact children={<ForgotPasswordPage />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
