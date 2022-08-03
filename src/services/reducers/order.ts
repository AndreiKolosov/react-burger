import { IOrderState } from '../../utils/interfaces/order';
import { TOrderActions } from '../../utils/types';
import { POST_ORDER_FAILED, POST_ORDER_SUCCESS, POST_ORDER_REQUEST, CLOSE_ORDER_DETAILS, RESET_ORDER_ERROR_STATUS } from '../constants/order';

const initialState: IOrderState = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false,
};

export const orderReducer = (state = initialState, action: TOrderActions) => {
  switch (action.type) {
    case POST_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case POST_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };
    }
    case POST_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
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
        orderFailed: false,
      };
    }
    default: {
      return state;
    }
  }
};
