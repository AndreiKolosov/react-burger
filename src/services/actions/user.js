import api from '../../utils/api';
import { getCookie, setCookie, deleteCookie } from '../../utils/cookie';

export const REGISTR_USER_REQUEST = 'REGISTR_USER_REQUEST';
export const REGISTR_USER_SUCCESS = 'REGISTR_USER_SUCCESS';
export const REGISTR_USER_FAILED = 'REGISTR_USER_FAILED';
export const RESET_REGISTER_ERR = 'RESET_REGISTER_ERR';

export const PWD_RECOVER_REQUEST = 'PWD_RECOVER_REQUEST';
export const PWD_RECOVER_FAILED = 'PWD_RECOVER_FAILED';
export const PWD_RECOVER_SUCCESS = 'PWD_RECOVER_SUCCESS';
export const RESET_PWD_RECOVER_ERR = 'RESET_RECOVER_ERR';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILED = 'LOG_IN_FAILED';
export const RESET_LOG_IN_ERR = 'RESET_LOG_IN_ERR';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILED = 'LOG_OUT_FAILED';
export const RESET_LOG_OUT_ERR = 'RESET_LOG_OUT_ERR';

export const PWD_RESET_REQUEST = 'PWD_RESET_REQUEST';
export const PWD_RESET_SUCCESS = 'PWD_RESET_SUCCESS';
export const PWD_RESET_FAILED = 'PWD_RESET_FAILED';
export const RESET_PWD_RESET_ERR = 'RESET_PWD_RESET_ERR';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';
export const RESET_GET_USER_ERR = 'RESET_GET_USER_ERR';

export const PATCH_USER_REQUEST = 'PATCH_USER_REQUEST';
export const PATCH_USER_SUCCESS = 'PATCH_USER_SUCCESS';
export const PATCH_USER_FAILED = 'PATCH_USER_FAILED';
export const RESET_PATCH_USER_ERR = 'RESET_PATCH_USER_ERR';

export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';
export const RESET_REFRESH_TOKEN_ERR = 'RESET_REFRESH_TOKEN_ERR';

export const CHECK_AUTH = 'CHECK_AUTH';
export const CHECK_AUTH_CHECKED = 'CHECK_AUTH_CHECKED';

// Errors reset---------------------------------------------------------------
export const resetRegisterError = () => ({ type: RESET_REGISTER_ERR });
export const resetPwdRecoverErr = () => ({ type: RESET_PWD_RECOVER_ERR });
export const resetLogInErr = () => ({ type: RESET_LOG_IN_ERR });
export const resetLogOutErr = () => ({ type: RESET_LOG_OUT_ERR });
export const resetPwdResetErr = () => ({ type: RESET_PWD_RESET_ERR });
export const resetGetUserErr = () => ({ type: RESET_GET_USER_ERR });
export const resetPatchUserErr = () => ({ type: RESET_PATCH_USER_ERR });
export const resetRefreshTokenErr = () => ({ type: RESET_REFRESH_TOKEN_ERR });
//-----------------------------------------------------------------------------

export const createNewUser = (name, email, password) => {
  return function (dispatch) {
    dispatch({ type: REGISTR_USER_REQUEST });
    api
      .createUser(name, email, password)
      .then((res) => {
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        localStorage.setItem('refreshToken', res.refreshToken);
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
      .then((res) => dispatch({ type: PWD_RECOVER_SUCCESS, success: res.success }))
      .catch((err) => dispatch({ type: PWD_RECOVER_FAILED, err: err.message }));
  };
};

export const resetPassword = (password, token) => {
  return function (dispatch) {
    dispatch({ type: PWD_RESET_REQUEST });
    api
      .resetPassword(password, token)
      .then((res) => dispatch({ type: PWD_RESET_SUCCESS, success: res.success }))
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
        localStorage.setItem('refreshToken', res.refreshToken);
        dispatch({ type: LOG_IN_SUCCESS, user: res.user });
      })
      .catch((err) => {
        dispatch({ type: LOG_IN_FAILED, err: err.message });
      });
  };
};

export const logOut = (refreshToken) => {
  return function (dispatch) {
    console.log('log out');

    dispatch({ type: LOG_OUT_REQUEST });
    api
      .logOut(refreshToken)
      .then((res) => {
        console.log('log out delete cookie');
        deleteCookie('accessToken');
        localStorage.removeItem('refreshToken');
        dispatch({ type: LOG_OUT_SUCCESS });
      })
      .catch((err) => dispatch({ type: LOG_OUT_FAILED, err: err.message }));
  };
};

export const fetchWithRefresh = (refreshToken, request, ...requestParams) => {
  return function (dispatch) {
    // const refreshToken = localStorage.getItem('refreshToken');
    // const { refreshToken } = requestParams;

    console.log('fetchWithRefresh', refreshToken);
    if (!refreshToken) {
      throw new Error('Token does not exist in storage');
    } else {
      dispatch({ type: REFRESH_TOKEN_REQUEST });
      api
        .refreshToken(refreshToken)
        .then((res) => {
          console.log('fetchWithRefresh - refresh');
          setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
          localStorage.setItem('refreshToken', res.refreshToken);
          dispatch({ type: REFRESH_TOKEN_SUCCESS });
          return res;
        })
        .then((res) => {
          console.log('fetchWithRefresh - repeat request');
          console.log(res);
          dispatch(request(...requestParams));
        })
        .catch((err) => {
          console.log('fetchWithRefresh - in err');

          dispatch(logOut());
          dispatch({ type: REFRESH_TOKEN_FAILED, err: err.message });
          return Promise.reject(err);
        });
    }
  };
};
export const getUser = (accessToken, refreshToken) => {
  return function (dispatch) {
    console.log('getUser');
    dispatch({ type: GET_USER_REQUEST });
    api
      .getUser(accessToken)
      .then((res) => dispatch({ type: GET_USER_SUCCESS, user: res.user }))
      .catch((err) => {
        if (err.message === 'jwt expired') {
          console.log('getUser - jwt expired');
          dispatch(fetchWithRefresh(refreshToken, getUser, accessToken));
        } else {
          dispatch({ type: GET_USER_FAILED, err: err.message });
          return Promise.reject(err);
        }
      });
  };
};

export const patchUser = (accessToken, name, email, password, refreshToken) => {
  return function (dispatch) {
    dispatch({ type: PATCH_USER_REQUEST });
    api
      .patchUser(accessToken, name, email, password)
      .then((res) => dispatch({ type: PATCH_USER_SUCCESS, user: res.user }))
      .catch((err) => {
        if (err.message === 'jwt expired' || err.message === 'You should be authorised') {
          dispatch(fetchWithRefresh(refreshToken, patchUser, accessToken, name, email, password));
        } else {
          dispatch({ type: PATCH_USER_FAILED, err: err.message });
          return Promise.reject(err);
        }
      });
  };
};

export const checkAuth = (accessToken, refreshToken) => {
  return function (dispatch) {
    dispatch({ type: CHECK_AUTH });
    if (!!accessToken) {
      dispatch(getUser(accessToken, refreshToken));
    }

    dispatch({ type: CHECK_AUTH_CHECKED });
  };
};
