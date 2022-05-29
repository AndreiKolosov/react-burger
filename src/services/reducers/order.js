import {
  POST_ORDER_FAILD,
  POST_ORDER_SUCCESS,
  POST_ORDER_REQUEST,
  CLOSE_ORDER_DETAILS,
  RESET_ORDER_ERROR_STATUS,
} from '../actions/order';

const initialState = {
  orderNumber: null,
  orderRequest: false,
  orderFaild: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case POST_ORDER_FAILD: {
      return {
        ...state,
        orderRequest: false,
        orderFaild: true,
      };
    }
    case POST_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderFaild: false,
        orderNumber: action.orderNumber,
        isOrderDetailsOpened: true,
      };
    }
    case CLOSE_ORDER_DETAILS: {
      return {
        ...state,
        isOrderDetailsOpened: false,
        orderNumber: null,
      };
    }
    case RESET_ORDER_ERROR_STATUS: {
      return {
        ...state,
        orderFaild: false,
      };
    }
    default: {
      return state;
    }
  }
};
