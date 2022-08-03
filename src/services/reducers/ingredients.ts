import { IIngredientsState } from '../../utils/interfaces/ingredients';
import { TIngredientsActions } from '../../utils/types';
import { GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_REQUEST, RESET_INGREDIENTS_ERROR_STATUS } from '../constants/ingredients';

const initialState: IIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const ingredientsReducer = (state = initialState, action: TIngredientsActions) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsFailed: false,
        ingredientsRequest: false,
        ingredients: action.ingredients,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
      };
    }
    case RESET_INGREDIENTS_ERROR_STATUS: {
      return {
        ...state,
        ingredientsFailed: false,
      };
    }
    default: {
      return state;
    }
  }
};
