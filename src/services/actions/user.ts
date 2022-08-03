import api from '../../utils/api';
import { getCookie, setCookie, deleteCookie } from '../../utils/cookie';
import { IError } from '../../utils/interfaces';
import { ILoginResponse, IPwdResponse, IRegistrationResponse, IUserResponse } from '../../utils/interfaces/api';
import {
  IResetGetUserErrAction,
  IResetLoginErrAction,
  IResetLogoutErrAction,
  IResetPatchUserErrAction,
  IResetPwdRecoverErrAction,
  IResetPwdResetErrAction,
  IResetRefreshTokenErrAction,
  IResetRegisterErrAction,
  ISetCheckAuthCheckedAction,
  ISetCheckAuthLoadingAction,
  ISetGetUserFailedAction,
  ISetGetUserLoadingAction,
  ISetGetUserSuccessAction,
  ISetLoginFailedAction,
  ISetLoginLoadingAction,
  ISetLoginSuccessAction,
  ISetLogoutFailedAction,
  ISetLogoutLoadingAction,
  ISetLogoutSuccessAction,
  ISetPatchUserFailedAction,
  ISetPatchUserLoadingAction,
  ISetPatchUserSuccessAction,
  ISetPwdRecoverFailedAction,
  ISetPwdRecoverLoadingAction,
  ISetPwdRecoverSuccessAction,
  ISetPwdResetFailedAction,
  ISetPwdResetLoadingAction,
  ISetPwdResetSuccessAction,
  ISetRefreshTokenFailedAction,
  ISetRefreshTokenLoadingAction,
  ISetRefreshTokenSuccessAction,
  ISetRegistrationFailedAction,
  ISetRegistrationLoadingAction,
  ISetRegistrationSuccess,
} from '../../utils/interfaces/user';
import {
  RESET_REGISTER_ERR,
  RESET_PWD_RECOVER_ERR,
  RESET_LOG_IN_ERR,
  RESET_LOG_OUT_ERR,
  RESET_PWD_RESET_ERR,
  RESET_GET_USER_ERR,
  RESET_PATCH_USER_ERR,
  RESET_REFRESH_TOKEN_ERR,
  REGISTR_USER_REQUEST,
  REGISTR_USER_SUCCESS,
  REGISTR_USER_FAILED,
  PWD_RECOVER_REQUEST,
  PWD_RECOVER_SUCCESS,
  PWD_RECOVER_FAILED,
  PWD_RESET_REQUEST,
  PWD_RESET_SUCCESS,
  PWD_RESET_FAILED,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILED,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILED,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  PATCH_USER_REQUEST,
  PATCH_USER_SUCCESS,
  PATCH_USER_FAILED,
  CHECK_AUTH,
  CHECK_AUTH_CHECKED,
} from '../constants/user';
import { AppThunk } from '../store';

// Errors reset---------------------------------------------------------------
export const resetRegisterError = (): IResetRegisterErrAction => ({ type: RESET_REGISTER_ERR });
export const resetPwdRecoverErr = (): IResetPwdRecoverErrAction => ({ type: RESET_PWD_RECOVER_ERR });
export const resetLogInErr = (): IResetLoginErrAction => ({ type: RESET_LOG_IN_ERR });
export const resetLogOutErr = (): IResetLogoutErrAction => ({ type: RESET_LOG_OUT_ERR });
export const resetPwdResetErr = (): IResetPwdResetErrAction => ({ type: RESET_PWD_RESET_ERR });
export const resetGetUserErr = (): IResetGetUserErrAction => ({ type: RESET_GET_USER_ERR });
export const resetPatchUserErr = (): IResetPatchUserErrAction => ({ type: RESET_PATCH_USER_ERR });
export const resetRefreshTokenErr = (): IResetRefreshTokenErrAction => ({ type: RESET_REFRESH_TOKEN_ERR });
//-----------------------------------------------------------------------------

export const setRegistrationLoading = (): ISetRegistrationLoadingAction => ({ type: REGISTR_USER_REQUEST });
export const setRegistrationFailed = (err: IError): ISetRegistrationFailedAction => ({ type: REGISTR_USER_FAILED, err: err.message });
export const setRegistrationSuccess = (res: IRegistrationResponse): ISetRegistrationSuccess => ({ type: REGISTR_USER_SUCCESS, user: res.user });

export const setPwdRecoverLoading = (): ISetPwdRecoverLoadingAction => ({ type: PWD_RECOVER_REQUEST });
export const setPwdRecoverFailed = (err: IError): ISetPwdRecoverFailedAction => ({ type: PWD_RECOVER_FAILED, err: err.message });
export const setPwdRecoverSuccess = (res: IPwdResponse): ISetPwdRecoverSuccessAction => ({ type: PWD_RECOVER_SUCCESS, success: res.success });

export const setPwdResetLoading = (): ISetPwdResetLoadingAction => ({ type: PWD_RESET_REQUEST });
export const setPwdResetFailed = (err: IError): ISetPwdResetFailedAction => ({ type: PWD_RESET_FAILED, err: err.message });
export const setPwdResetSuccess = (res: IPwdResponse): ISetPwdResetSuccessAction => ({ type: PWD_RESET_SUCCESS, success: res.success });

export const setLoginLoading = (): ISetLoginLoadingAction => ({ type: LOG_IN_REQUEST });
export const setLoginFailed = (err: IError): ISetLoginFailedAction => ({ type: LOG_IN_FAILED, err: err.message });
export const setLoginSuccess = (res: ILoginResponse): ISetLoginSuccessAction => ({ type: LOG_IN_SUCCESS, user: res.user });

export const setLogoutLoading = (): ISetLogoutLoadingAction => ({ type: LOG_OUT_REQUEST });
export const setLogoutFailed = (err: IError): ISetLogoutFailedAction => ({ type: LOG_OUT_FAILED, err: err.message });
export const setLogoutSuccess = (): ISetLogoutSuccessAction => ({ type: LOG_OUT_SUCCESS });

export const setRefreshTokenLoading = (): ISetRefreshTokenLoadingAction => ({ type: REFRESH_TOKEN_REQUEST });
export const setRefreshTokenFailed = (err: IError): ISetRefreshTokenFailedAction => ({ type: REFRESH_TOKEN_FAILED, err: err.message });
export const setRefreshTokenSuccess = (): ISetRefreshTokenSuccessAction => ({ type: REFRESH_TOKEN_SUCCESS });

export const setGetUserLoading = (): ISetGetUserLoadingAction => ({ type: GET_USER_REQUEST });
export const setGetUserFailed = (err: IError): ISetGetUserFailedAction => ({ type: GET_USER_FAILED, err: err.message });
export const setGetUserSuccess = (res: IUserResponse): ISetGetUserSuccessAction => ({ type: GET_USER_SUCCESS, user: res.user });

export const setPatchUserLoading = (): ISetPatchUserLoadingAction => ({ type: PATCH_USER_REQUEST });
export const setPatchUserFailed = (err: IError): ISetPatchUserFailedAction => ({ type: PATCH_USER_FAILED, err: err.message });
export const setPatchUserSuccess = (res: IUserResponse): ISetPatchUserSuccessAction => ({ type: PATCH_USER_SUCCESS, user: res.user });

export const setCheckAuthLoading = (): ISetCheckAuthLoadingAction => ({ type: CHECK_AUTH });
export const setCheckAuthChecked = (): ISetCheckAuthCheckedAction => ({ type: CHECK_AUTH_CHECKED });

export const createNewUser = (name: string, email: string, password: string): AppThunk => {
  return function (dispatch) {
    dispatch(setRegistrationLoading());
    api
      .createUser(name, email, password)
      .then((res) => {
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        localStorage.setItem('refreshToken', res.refreshToken);
        dispatch(setRegistrationSuccess(res));
      })
      .catch((err) => {
        dispatch(setRegistrationFailed(err));
      });
  };
};

export const recoverPassword = (email: string): AppThunk => {
  return function (dispatch) {
    dispatch(setPwdRecoverLoading());
    api
      .forgotPassword(email)
      .then((res) => dispatch(setPwdRecoverSuccess(res)))
      .catch((err) => dispatch(setPwdRecoverFailed(err)));
  };
};

export const resetPassword = (password: string, token: string): AppThunk => {
  return function (dispatch) {
    dispatch(setPwdResetLoading());
    api
      .resetPassword(password, token)
      .then((res) => dispatch(setPwdResetSuccess(res)))
      .catch((err) => dispatch(setPwdResetFailed(err)));
  };
};

export const logIn = (email: string, password: string): AppThunk => {
  return function (dispatch) {
    dispatch(setLoginLoading());
    api
      .logIn(email, password)
      .then((res) => {
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        localStorage.setItem('refreshToken', res.refreshToken);
        dispatch(setLoginSuccess(res));
      })
      .catch((err) => {
        dispatch(setLoginFailed(err));
      });
  };
};

export const logOut = (refreshToken: string): AppThunk => {
  return function (dispatch) {
    console.log('log out');

    dispatch(setLogoutLoading());
    api
      .logOut(refreshToken)
      .then((res) => {
        console.log('log out delete cookie');
        deleteCookie('accessToken');
        localStorage.removeItem('refreshToken');
        dispatch(setLogoutSuccess());
      })
      .catch((err) => dispatch(setLogoutFailed(err)));
  };
};

export const fetchWithRefresh = (request: any, requestParams: { [key: string]: string }): AppThunk => {
  return function (dispatch) {
    const refreshToken = localStorage.getItem('refreshToken');

    console.log('fetchWithRefresh');
    if (!refreshToken) {
      throw new Error('Token does not exist in storage');
    } else {
      dispatch(setRefreshTokenLoading());
      console.log(refreshToken);
      api
        .refreshToken(refreshToken)
        .then((res) => {
          console.log('fetchWithRefresh - refresh');
          setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
          localStorage.setItem('refreshToken', res.refreshToken);
          dispatch(setRefreshTokenSuccess());
          return res;
        })
        .then((res) => {
          console.log('fetchWithRefresh - repeat request');
          console.log(requestParams, 'params');

          requestParams = { ...requestParams, accessToken: res.accessToken };

          dispatch(request(requestParams));
        })
        .catch((err) => {
          console.log('fetchWithRefresh - in err');

          dispatch(logOut(refreshToken));
          dispatch(setRefreshTokenFailed(err));
          return Promise.reject(err);
        });
    }
  };
};
export const getUser = ({ accessToken }: { accessToken: string }): AppThunk => {
  return function (dispatch) {
    console.log('getUser');
    dispatch(setGetUserLoading());
    api
      .getUser(accessToken)
      .then((res) => dispatch(setGetUserSuccess(res)))
      .catch((err) => {
        if (err.message === 'jwt expired' || err.message === 'jwt malformed') {
          console.log('getUser - jwt expired');
          dispatch(fetchWithRefresh(getUser, { accessToken }));
        } else {
          dispatch(setGetUserFailed(err));
          return Promise.reject(err);
        }
      });
  };
};

export const patchUser = ({
  accessToken,
  name,
  email,
  password,
}: {
  accessToken: string;
  name: string;
  email: string;
  password: string;
}): AppThunk => {
  return function (dispatch) {
    dispatch(setPatchUserLoading());
    api
      .patchUser(accessToken, name, email, password)
      .then((res) => dispatch(setPatchUserSuccess(res)))
      .catch((err) => {
        if (err.message === 'jwt expired' || err.message === 'You should be authorised') {
          dispatch(fetchWithRefresh(patchUser, { accessToken, name, email, password }));
        } else {
          dispatch(setPatchUserFailed(err));
          return Promise.reject(err);
        }
      });
  };
};

export const checkAuth = (): AppThunk => {
  return function (dispatch) {
    const accessToken = getCookie('accessToken');

    dispatch(setCheckAuthLoading());
    if (!!accessToken) {
      dispatch(getUser({ accessToken: `Bearer ${accessToken}` }));
    }

    dispatch(setCheckAuthChecked());
  };
};
