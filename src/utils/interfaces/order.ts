import {
  CLOSE_ORDER_DETAILS,
  POST_ORDER_FAILED,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  RESET_ORDER_ERROR_STATUS,
} from '../../services/constants/order';

export interface IOrderState {
  orderNumber: number | null;
  orderRequest: boolean;
  orderFailed: boolean;
}

export interface ICloseOrderModalAction {
  readonly type: typeof CLOSE_ORDER_DETAILS;
}

export interface IResetOrderError {
  readonly type: typeof RESET_ORDER_ERROR_STATUS;
}

export interface IPostOrderRequest {
  readonly type: typeof POST_ORDER_REQUEST;
}

export interface IPostOrderFailed {
  readonly type: typeof POST_ORDER_FAILED;
}

export interface IPostOrderSuccess {
  readonly type: typeof POST_ORDER_SUCCESS;
  readonly orderNumber: number;
}
