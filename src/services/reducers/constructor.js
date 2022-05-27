import { ADD, DELETE, RESET } from '../actions/constructor';

const initialState = {
  bun: null,
  filling: [],
  order: [],
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
            order: [...state.order].filter((id) => id !== state.bun._id).concat(action.item._id),
            totalPrice: state.totalPrice - state.bun.price * 2 + action.item.price * 2,
          };
        } else {
          return {
            ...state,
            bun: action.item,
            order: [...state.order, action.item._id],
            totalPrice: state.totalPrice + action.item.price * 2,
          };
        }
      }
      return {
        ...state,
        filling: [...state.filling, action.item],
        order: [...state.order, action.item._id],
        totalPrice: state.totalPrice + action.item.price,
      };

    case DELETE:
      return {
        ...state,
        filling: [...state.filling].filter((item) => item._id !== action.item._id),
        order: [...state.order].filter((id) => id !== action.item._id),
        totalPrice: state.totalPrice - action.item.price,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};
