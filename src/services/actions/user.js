import api from '../../utils/api';
import { setCookie, deleteCookie } from '../../utils/utils';

export const REGISTR_USER_REQUEST = 'REGISTR_USER_REQUEST';
export const REGISTR_USER_SUCCESS = 'REGISTR_USER_SUCCESS';
export const REGISTR_USER_FAILED = 'REGISTR_USER_FAILED';
export const PWD_RECOVER_REQUEST = 'PWD_RECOVER_REQUEST';
export const PWD_RECOVER_FAILED = 'PWD_RECOVER_FAILED';
export const PWD_RECOVER_SUCCESS = 'PWD_RECOVER_SUCCESS';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILED = 'LOG_IN_FAILED';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILED = 'LOG_OUT_FAILED';
export const PWD_RESET_REQUEST = 'PWD_RESET_REQUEST';
export const PWD_RESET_SUCCESS = 'PWD_RESET_SUCCESS';
export const PWD_RESET_FAILED = 'PWD_RESET_FAILED';

export const createNewUser = (name, email, password) => {
  return function (dispatch) {
    dispatch({ type: REGISTR_USER_REQUEST });
    api
      .createUser(name, email, password)
      .then((res) => {
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        setCookie('refreshToken', res.refreshToken);
        dispatch({ type: REGISTR_USER_SUCCESS, user: res.user });
      })
      .catch((err) => {
        dispatch({ type: REGISTR_USER_FAILED, err: err.message });
      });
  };
};

export const recoverPassword = (email) => {
  return function (dispatch) {
    dispatch({ type: PWD_RECOVER_REQUEST });
    api
      .forgotPassword(email)
      .then((res) => dispatch({ type: PWD_RECOVER_SUCCESS }))
      .catch((err) => dispatch({ type: PWD_RECOVER_FAILED, err: err.message }));
  };
};

export const resetPassword = (password, token) => {
  return function (dispatch) {
    dispatch({ type: PWD_RESET_REQUEST });
    api
      .resetPassword(password, token)
      .then((res) => dispatch({ type: PWD_RESET_SUCCESS }))
      .catch((err) => dispatch({ type: PWD_RESET_FAILED, err: err.message }));
  };
};

export const logIn = (email, password) => {
  return function (dispatch) {
    dispatch({ type: LOG_IN_REQUEST });
    api
      .logIn(email, password)
      .then((res) => {
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        setCookie('refreshToken', res.refreshToken);
        dispatch({ type: LOG_IN_SUCCESS, user: res.user });
      })
      .catch((err) => dispatch({ type: LOG_IN_FAILED, err: err.message }));
  };
};

export const logOut = () => {
  return function (dispatch) {
    dispatch({ type: LOG_OUT_REQUEST });
    api
      .logOut()
      .then((res) => {
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        dispatch({ type: LOG_OUT_SUCCESS });
      })
      .catch((err) => dispatch({ type: LOG_OUT_FAILED, err: err.message }));
  };
};
