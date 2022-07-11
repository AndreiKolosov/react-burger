import React, { useEffect } from 'react';
import Loader from '../loader/loader';
import AppHeader from '../app-header/app-header';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { checkAuth } from '../../services/actions/user';
import { getCookie } from '../../utils/cookie';
import ModalSwitch from '../modal-switch/modal-switch';

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
          <ModalSwitch />
        </Router>
      )}
    </>
  );
}

export default App;
