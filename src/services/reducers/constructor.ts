import { ADD, DELETE, RESET, REORDER_INGREDIENT, TConstructorActions } from '../actions/constructor';
import update from 'immutability-helper';
import { IConstructorState } from '../../utils/interfaces';

const initialState: IConstructorState = {
  bun: null,
  filling: [],
  orderIds: [],
  totalPrice: 0,
};

export const constructorReducer = (state = initialState, action: TConstructorActions): IConstructorState => {
  switch (action.type) {
    case ADD:
      if (action.item.type === 'bun') {
        if (state.bun) {
          return {
            ...state,
            bun: action.item,
            orderIds: [...state.orderIds].filter((id) => id !== state?.bun?._id).concat(action.item._id),
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
        filling: [...state.filling, action.item],
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

    case REORDER_INGREDIENT: {
      return {
        ...state,
        // update - Immutability Helper
        //  $splice - работает следующим образом
        // filling.splice(dragIndex, 1); // удаляем то что перетаскиваем
        // filling.splice(hoverIndex, 0, dragFilling); // вставляем в позицию на которую навели.
        filling: update(state.filling, {
          $splice: [
            [action.dragIndex, 1],
            [action.hoverIndex, 0, state.filling[action.dragIndex]],
          ],
        }),
      };
    }

    case RESET:
      return initialState;

    default:
      return state;
  }
};
