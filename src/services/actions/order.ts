import api from '../../utils/api';
import { ICloseOrderModalAction, IPostOrderFailed, IPostOrderRequest, IPostOrderSuccess, IResetOrderError } from '../../utils/interfaces/order';
import { INewOrderResponse } from '../../utils/interfaces/api';
import { CLOSE_ORDER_DETAILS, RESET_ORDER_ERROR_STATUS, POST_ORDER_FAILED, POST_ORDER_REQUEST, POST_ORDER_SUCCESS } from '../constants/order';
import { AppThunk } from '../store';

export function closeOrderModal(): ICloseOrderModalAction {
  return { type: CLOSE_ORDER_DETAILS };
}

export function resetOrderError(): IResetOrderError {
  return { type: RESET_ORDER_ERROR_STATUS };
}

export function postOrderRequest(): IPostOrderRequest {
  return { type: POST_ORDER_REQUEST };
}

export function postOrderFailed(): IPostOrderFailed {
  return { type: POST_ORDER_FAILED };
}

export function postOrderSuccess(res: INewOrderResponse): IPostOrderSuccess {
  return {
    type: POST_ORDER_SUCCESS,
    orderNumber: res.order.number,
  };
}

export function postOrder({ accessToken, order }: { accessToken: string; order: string[] }): AppThunk {
  return function (dispatch) {
    dispatch({ type: POST_ORDER_REQUEST });
    api
      .postOrder(accessToken, order)
      .then((res) => {
        dispatch(postOrderSuccess(res));
      })
      .catch((err) => dispatch({ type: POST_ORDER_FAILED }));
  };
}
