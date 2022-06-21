import {
  CREATE_USER_FAILED,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  PWD_RESET_FAILED,
  PWD_RESET_REQUEST,
  PWD_RESET_SUCCESS,
} from '../actions/user';

const initialState = {
  userCreateRequest: false,
  userCreateFAiled: false,
  pwdResetRequest: false,
  pwdResetFailed: false,
  pwdResetStatus: false,
  isAuth: false,
  user: {
    name: '',
    email: '',
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST: {
      return {
        ...state,
        userCreateRequest: true,
        userCreateFAiled: false,
      };
    }
    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        userCreateRequest: false,
        userCreateFAiled: false,
        user: action.user,
        isAuth: true,
      };
    }
    case CREATE_USER_FAILED: {
      return {
        ...state,
        userCreateFAiled: true,
        userCreateRequest: false,
      };
    }
    case PWD_RESET_REQUEST: {
      return {
        ...state,
        pwdResetRequest: true,
        pwdResetFailed: false,
      };
    }
    case PWD_RESET_SUCCESS: {
      return {
        ...state,
        pwdResetRequest: false,
        pwdResetFailed: false,
        pwdResetStatus: true,
      };
    }
    case PWD_RESET_FAILED: {
      return {
        ...state,
        pwdResetFailed: true,
        pwdResetRequest: false,
        pwdResetStatus: false,
      };
    }
    default: {
      return state;
    }
  }
};
