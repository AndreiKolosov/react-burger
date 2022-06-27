import { getCookie } from '../../utils/utils';
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
} from '../actions/user';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  canResetPassword: false,
  isAuth: !!getCookie('accessToken'),
  errMessage: '',
  registerUserRequest: false,
  registerUserErr: false,
  logInUserRequest: false,
  logInUserErr: false,
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
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTR_USER_REQUEST: {
      return {
        ...state,
        registerUserRequest: true,
        registerUserErr: false,
        errMessage: '',
      };
    }
    case REGISTR_USER_SUCCESS: {
      return {
        ...state,
        registerUserRequest: false,
        registerUserErr: false,
        user: {
          ...state.user,
          name: action.user,
        },
      };
    }
    case REGISTR_USER_FAILED: {
      return {
        ...state,
        registerUserRequest: false,
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
        logInUserRequest: true,
        logInUserErr: false,
        errMessage: '',
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        logInUserRequest: false,
        logInUserErr: false,
        isAuth: true,
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        },
      };
    }
    case LOG_IN_FAILED: {
      return {
        ...state,
        logInUserRequest: false,
        logInUserErr: true,
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
        isAuth: false,
        user: {
          ...state.user,
          name: '',
          email: '',
        },
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
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        },
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
        user: {
          ...state.user,
          name: action.user.name,
          email: action.user.email,
        },
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
    default: {
      return state;
    }
  }
};
