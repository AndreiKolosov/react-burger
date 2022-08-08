import React, { FC } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';
import Loader from '../loader/loader';
import { useAppSelector } from '../../services/store';

const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const { user, isAuthChecked } = useAppSelector((store) => store.user);
  const location = useLocation();

  !isAuthChecked && <Loader />;

  if (isAuthChecked && !user) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location },
        }}
      />
    );
  }

  return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
