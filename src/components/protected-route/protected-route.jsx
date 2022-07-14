import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../loader/loader';

const ProtectedRoute = ({ children, ...rest }) => {
  const { user, isAuthChecked } = useSelector((store) => store.user);
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

  // if (user) {
  return <Route {...rest}>{children}</Route>;
  // }

  // return (
  //   <Route
  //     {...rest}
  //     render={({ location }) =>
  //       user ? (
  //         children
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: '/login',
  //             state: { from: location },
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );
  // <Route {...rest}>{children}</Route>
};

export default ProtectedRoute;
