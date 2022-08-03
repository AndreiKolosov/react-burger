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
} from '../../services/constants/user';
import { IUser } from '.';

export interface IUserState {
  user: object | null;
  isAuthChecked: boolean;
  errMessage: string;
  registerUserRequest: boolean;
  registerUserErr: boolean;
  registerSuccess: boolean;
  logInRequest: boolean;
  logInErr: boolean;
  passwordRecoverRequest: boolean;
  passwordRecoverErr: boolean;
  canResetPassword: null | boolean;
  passwordResetRequest: boolean;
  passwordResetErr: boolean;
  isPasswordReset: null | boolean;
  logOutRequest: boolean;
  logOutErr: boolean;
  getUserRequest: boolean;
  getUserFailed: boolean;
  patchUserRequest: boolean;
  patchUserFailed: boolean;
  isUserChanged: boolean;
  refreshTokenRequest: boolean;
  refreshTokenFailed: boolean;
  checkAuthRequest: boolean;
  checkAuthFailed: boolean;
}

export interface IResetRegisterErrAction {
  readonly type: typeof RESET_REGISTER_ERR;
}

export interface IResetPwdRecoverErrAction {
  readonly type: typeof RESET_PWD_RECOVER_ERR;
}

export interface IResetLoginErrAction {
  readonly type: typeof RESET_LOG_IN_ERR;
}

export interface IResetLogoutErrAction {
  readonly type: typeof RESET_LOG_OUT_ERR;
}

export interface IResetPwdResetErrAction {
  readonly type: typeof RESET_PWD_RESET_ERR;
}

export interface IResetGetUserErrAction {
  readonly type: typeof RESET_GET_USER_ERR;
}

export interface IResetPatchUserErrAction {
  readonly type: typeof RESET_PATCH_USER_ERR;
}

export interface IResetRefreshTokenErrAction {
  readonly type: typeof RESET_REFRESH_TOKEN_ERR;
}

export interface ISetRegistrationLoadingAction {
  readonly type: typeof REGISTR_USER_REQUEST;
}

export interface ISetRegistrationFailedAction {
  readonly type: typeof REGISTR_USER_FAILED;
  readonly err: string;
}

export interface ISetRegistrationSuccess {
  readonly type: typeof REGISTR_USER_SUCCESS;
  readonly user: IUser;
}

export interface ISetPwdRecoverLoadingAction {
  readonly type: typeof PWD_RECOVER_REQUEST;
}

export interface ISetPwdRecoverFailedAction {
  readonly type: typeof PWD_RECOVER_FAILED;
  readonly err: string;
}

export interface ISetPwdRecoverSuccessAction {
  readonly type: typeof PWD_RECOVER_SUCCESS;
  readonly success: boolean;
}

export interface ISetPwdResetLoadingAction {
  readonly type: typeof PWD_RESET_REQUEST;
}

export interface ISetPwdResetFailedAction {
  readonly type: typeof PWD_RESET_FAILED;
  readonly err: string;
}

export interface ISetPwdResetSuccessAction {
  readonly type: typeof PWD_RESET_SUCCESS;
  readonly success: boolean;
}

export interface ISetLoginLoadingAction {
  readonly type: typeof LOG_IN_REQUEST;
}

export interface ISetLoginFailedAction {
  readonly type: typeof LOG_IN_FAILED;
  readonly err: string;
}

export interface ISetLoginSuccessAction {
  readonly type: typeof LOG_IN_SUCCESS;
  readonly user: IUser;
}

export interface ISetLogoutLoadingAction {
  readonly type: typeof LOG_OUT_REQUEST;
}

export interface ISetLogoutFailedAction {
  readonly type: typeof LOG_OUT_FAILED;
  readonly err: string;
}

export interface ISetLogoutSuccessAction {
  readonly type: typeof LOG_OUT_SUCCESS;
}

export interface ISetRefreshTokenLoadingAction {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
}

export interface ISetRefreshTokenFailedAction {
  readonly type: typeof REFRESH_TOKEN_FAILED;
  readonly err: string;
}

export interface ISetRefreshTokenSuccessAction {
  readonly type: typeof REFRESH_TOKEN_SUCCESS;
}

export interface ISetGetUserLoadingAction {
  readonly type: typeof GET_USER_REQUEST;
}

export interface ISetGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
  readonly err: string;
}

export interface ISetGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: IUser;
}

export interface ISetPatchUserLoadingAction {
  readonly type: typeof PATCH_USER_REQUEST;
}

export interface ISetPatchUserFailedAction {
  readonly type: typeof PATCH_USER_FAILED;
  readonly err: string;
}

export interface ISetPatchUserSuccessAction {
  readonly type: typeof PATCH_USER_SUCCESS;
  readonly user: IUser;
}

export interface ISetCheckAuthLoadingAction {
  readonly type: typeof CHECK_AUTH;
}

export interface ISetCheckAuthCheckedAction {
  readonly type: typeof CHECK_AUTH_CHECKED;
}
