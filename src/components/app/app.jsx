import React from 'react';
import AppHeader from '../app-header/app-header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage } from '../../pages';

function App() {
  return (
    <>
      <AppHeader />
      <Router>
        <Switch>
          <Route path='/' exact children={<HomePage />} />
          <Route path='/login' exact children={<LoginPage />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
