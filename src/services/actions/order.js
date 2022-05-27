import { postOrder } from '../../utils/api';

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILD = 'POST_ORDER_FAILD';
export const SET_ORDER_DETAILS_OPENED = 'SET_ORDER_DETAILS_OPENED';
export const SET_ORDER_DETAILS_CLOSED = 'SET_ORDER_DETAILS_CLOSED';
export const RESET_ORDER_ERROR_STATUS = 'RESET_ORDER_ERROR_STATUS';

export function postOrderRequest(order) {
  return function (dispatch) {
    dispatch({ type: POST_ORDER_REQUEST });
    postOrder(order)
      // .then((res) => console.log(res))
      .then((res) => dispatch({ type: POST_ORDER_SUCCESS, orderNumber: res.order.number }))
      // .then((res) => dispatch({ type: SET_ORDER_DETAILS_OPENED }))
      .catch((err) => dispatch({ type: POST_ORDER_FAILD }));
  };
}
