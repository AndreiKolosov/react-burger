import { postOrder } from '../../utils/api';

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILD = 'POST_ORDER_FAILD';
export const CLOSE_ORDER_DETAILS = 'CLOSE_ORDER_DETAILS';
export const RESET_ORDER_ERROR_STATUS = 'RESET_ORDER_ERROR_STATUS';

export function postOrderRequest(order) {
  return function (dispatch) {
    dispatch({ type: POST_ORDER_REQUEST });
    postOrder(order)
      .then((res) => dispatch({ type: POST_ORDER_SUCCESS, orderNumber: res.order.number }))
      .catch((err) => dispatch({ type: POST_ORDER_FAILD }));
  };
}