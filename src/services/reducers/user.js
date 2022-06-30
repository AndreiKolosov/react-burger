import {
  REGISTR_USER_FAILED,
  REGISTR_USER_REQUEST,
  REGISTR_USER_SUCCESS,
  PWD_RECOVER_FAILED,
  PWD_RECOVER_REQUEST,
  PWD_RECOVER_SUCCESS,
  LOG_IN_FAILED,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  PWD_RESET_FAILED,
  PWD_RESET_REQUEST,
  PWD_RESET_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  PATCH_USER_REQUEST,
  PATCH_USER_SUCCESS,
  PATCH_USER_FAILED,
  CHECK_AUTH,
  CHECK_AUTH_CHECKED,
  RESET_GET_USER_ERR,
  RESET_LOG_IN_ERR,
  RESET_LOG_OUT_ERR,
  RESET_PATCH_USER_ERR,
  RESET_PWD_RECOVER_ERR,
  RESET_PWD_RESET_ERR,
  RESET_REFRESH_TOKEN_ERR,
  RESET_REGISTER_ERR,
} from '../actions/user';

const initialState = {
  user: null,
  canResetPassword: false,
  isAuthChecked: false,

  errMessage: '',

  registerUserRequest: false,
  registerUserErr: false,
  registerSuccess: false,

  logInRequest: false,
  logInErr: false,

  passwordRecoverRequest: false,
  passwordRecoverErr: false,

  passwordResetRequest: false,
  passwordResetErr: false,

  logOutRequest: false,
  logOutErr: false,

  getUserRequest: false,
  getUserFailed: false,

  patchUserRequest: false,
  patchUserFailed: false,

  refreshTokenRequest: false,
  refreshTokenFailed: false,

  checkAuthRequest: false,
  checkAuthFailed: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTR_USER_REQUEST: {
      return {
        ...state,
        registerUserRequest: true,
        registerUserErr: false,
        registerSuccess: false,
        errMessage: '',
      };
    }
    case REGISTR_USER_SUCCESS: {
      return {
        ...state,
        registerUserRequest: false,
        registerUserErr: false,
        registerSuccess: true,
        user: action.user,
      };
    }
    case REGISTR_USER_FAILED: {
      return {
        ...state,
        registerUserRequest: false,
        registerSuccess: false,
        registerUserErr: true,
        errMessage: action.err,
      };
    }
    case PWD_RECOVER_REQUEST: {
      return {
        ...state,
        passwordRecoverRequest: true,
        passwordRecoverErr: false,
        errMessage: '',
      };
    }
    case PWD_RECOVER_SUCCESS: {
      return {
        ...state,
        passwordRecoverRequest: false,
        passwordRecoverErr: false,
        canResetPassword: true,
      };
    }
    case PWD_RECOVER_FAILED: {
      return {
        ...state,
        passwordRecoverRequest: false,
        passwordRecoverErr: true,
        errMessage: action.err,
        canResetPassword: false,
      };
    }
    case LOG_IN_REQUEST: {
      return {
        ...state,
        logInRequest: true,
        logInErr: false,
        errMessage: '',
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        logInRequest: false,
        logInErr: false,
        user: action.user,
      };
    }
    case LOG_IN_FAILED: {
      return {
        ...state,
        logInRequest: false,
        logInErr: true,
        errMessage: action.err,
      };
    }
    case PWD_RESET_REQUEST: {
      return {
        ...state,
        passwordResetRequest: true,
        passwordResetErr: false,
        errMessage: '',
      };
    }
    case PWD_RESET_SUCCESS: {
      return {
        ...state,
        passwordResetRequest: false,
        passwordResetErr: false,
      };
    }
    case PWD_RESET_FAILED: {
      return {
        ...state,
        passwordResetRequest: false,
        passwordResetErr: true,
        errMessage: action.err,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        logOutRequest: true,
        logOutErr: false,
        errMessage: '',
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        logOutRequest: false,
        logOutErr: false,
        user: null,
      };
    }
    case LOG_OUT_FAILED: {
      return {
        ...state,
        logOutRequest: false,
        logOutErr: true,
        errMessage: action.err,
      };
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: false,
        user: action.user,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: true,
        errMessage: action.err,
      };
    }
    case PATCH_USER_REQUEST: {
      return {
        ...state,
        patchUserRequest: true,
        patchUserFailed: false,
      };
    }
    case PATCH_USER_SUCCESS: {
      return {
        ...state,
        patchUserRequest: false,
        patchUserFailed: false,
        user: action.user,
      };
    }
    case PATCH_USER_FAILED: {
      return {
        ...state,
        patchUserRequest: false,
        patchUserFailed: true,
        errMessage: action.err,
      };
    }
    case CHECK_AUTH: {
      return {
        ...state,
        checkAuthRequest: true,
        checkAuthFailed: false,
        isAuthChecked: false,
      };
    }
    case CHECK_AUTH_CHECKED: {
      return {
        ...state,
        checkAuthRequest: false,
        checkAuthFailed: false,
        isAuthChecked: true,
      };
    }
    case RESET_GET_USER_ERR: {
      return {
        ...state,
        getUserFailed: false,
        errMessage: '',
      };
    }
    case RESET_LOG_IN_ERR: {
      return {
        ...state,
        logInErr: false,
        errMessage: '',
      };
    }
    case RESET_LOG_OUT_ERR: {
      return {
        ...state,
        logOutErr: false,
        errMessage: '',
      };
    }
    case RESET_PATCH_USER_ERR: {
      return {
        ...state,
        patchUserFailed: false,
        errMessage: '',
      };
    }
    case RESET_PWD_RECOVER_ERR: {
      return {
        ...state,
        passwordRecoverErr: false,
        errMessage: '',
      };
    }
    case RESET_PWD_RESET_ERR: {
      return {
        ...state,
        passwordResetErr: false,
        errMessage: '',
      };
    }
    case RESET_REFRESH_TOKEN_ERR: {
      return {
        ...state,
        refreshTokenFailed: false,
        errMessage: '',
      };
    }
    case RESET_REGISTER_ERR: {
      return {
        ...state,
        registerUserErr: false,
        errMessage: '',
      };
    }

    default: {
      return state;
    }
  }
};
