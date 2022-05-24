import { ADD, DELETE, RESET } from '../actions/constructor';

const initialState = {
  bun: null,
  ingredients: [],
  order: [],
  totalPrice: 0,
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      if (action.payload.type === 'bun') {
        return {
          ...state,
          bun: action.payload,
          order: [...state.order, action.payload._id],
          totalPrice: state.totalPrice + action.payload.price * 2,
        };
      }
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
        order: [...state.order, action.payload._id],
        totalPrice: state.totalPrice + action.payload.price,
      };

    case DELETE:
      return {
        ...state,
        ingredients: state.ingredients.filter((item) => item._id !== action.payload._id),
        order: state.order.filter((id) => id !== action.payload._id),
        totalPrice: state.totalPrice - action.payload.price,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};
