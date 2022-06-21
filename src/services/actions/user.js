import { createUser, forgotPassword } from '../../utils/api';
import { setCookie, getCookie } from '../../utils/utils';

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED';
export const PWD_RESET_REQUEST = 'PWD_RESET_REQUEST';
export const PWD_RESET_FAILED = 'PWD_RESET_FAILED';
export const PWD_RESET_SUCCESS = 'PWD_RESET_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const createNewUser = (name, email, password) => {
  return function (dispatch) {
    createUser(name, email, password)
      .then((res) => {
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        setCookie('refreshToken', res.refreshToken);
        dispatch({ type: CREATE_USER_SUCCESS, user: res.user });
      })
      .catch((err) => dispatch({ type: CREATE_USER_FAILED }));
  };
};

export const recoverPassword = (email) => {
  return function (dispatch) {
    dispatch({ type: PWD_RESET_REQUEST });
    dispatch(forgotPassword(email))
      .then((res) => dispatch({ type: PWD_RESET_SUCCESS }))
      .catch((err) => dispatch({ type: PWD_RESET_FAILED }));
  };
};

export const logIn = (email, password) => {
  return function (dispatch) {};
};
