import api from '../../utils/api';

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';
export const CLOSE_ORDER_DETAILS = 'CLOSE_ORDER_DETAILS';
export const RESET_ORDER_ERROR_STATUS = 'RESET_ORDER_ERROR_STATUS';

export function closeOrderModal() {
  return {
    type: CLOSE_ORDER_DETAILS,
  };
}

export function resetOrderError() {
  return {
    type: RESET_ORDER_ERROR_STATUS,
  };
}

export function postOrderRequest({ accessToken, order }) {
  return function (dispatch) {
    dispatch({ type: POST_ORDER_REQUEST });
    api
      .postOrder(accessToken, order)
      .then((res) => dispatch({ type: POST_ORDER_SUCCESS, orderNumber: res.order.number }))
      .catch((err) => dispatch({ type: POST_ORDER_FAILED }));
  };
}
