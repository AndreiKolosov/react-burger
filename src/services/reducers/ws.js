import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from '../actions/ws';

const initialState = {
  wsRequest: false,
  wsOpen: false,
  wsFailed: false,
  orders: [],
};

export const wsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_START: {
      return {
        ...state,
        wsRequest: true,
        wsOpen: false,
        wsFailed: false,
      };
    }
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsRequest: false,
        wsFailed: false,
        wsOpen: true,
      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        wsRequest: false,
        wsOpen: false,
        wsFailed: true,
      };
    }
    case WS_GET_MESSAGE: {
      return {
        ...state,
        orders: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
