import { SET_INGREDIENT, CLOSE_INGREDIENT_DETAILS } from '../actions/ingredient';

const initialState = {
  selectedIngredient: null,
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.ingredient,
      };
    }
    case CLOSE_INGREDIENT_DETAILS: {
      return {
        ...state,
        selectedIngredient: null,
      };
    }
    default: {
      return state;
    }
  }
};
