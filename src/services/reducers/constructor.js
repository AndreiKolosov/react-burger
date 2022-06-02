import { ADD, DELETE, RESET } from '../actions/constructor';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  bun: null,
  filling: [],
  orderIds: [],
  totalPrice: 0,
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      if (action.item.type === 'bun') {
        if (state.bun) {
          return {
            ...state,
            bun: action.item,
            orderIds: [...state.orderIds]
              .filter((id) => id !== state.bun._id)
              .concat(action.item._id),
            totalPrice: state.totalPrice - state.bun.price * 2 + action.item.price * 2,
          };
        } else {
          return {
            ...state,
            bun: action.item,
            orderIds: [...state.orderIds, action.item._id],
            totalPrice: state.totalPrice + action.item.price * 2,
          };
        }
      }
      return {
        ...state,
        filling: [...state.filling, { ...action.item, uId: uuidv4() }],
        orderIds: [...state.orderIds, action.item._id],
        totalPrice: state.totalPrice + action.item.price,
      };

    case DELETE:
      return {
        ...state,
        filling: [...state.filling].filter((item) => item.uId !== action.item.uId),
        orderIds: [...state.orderIds].filter((id) => id !== action.item._id),
        totalPrice: state.totalPrice - action.item.price,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};
