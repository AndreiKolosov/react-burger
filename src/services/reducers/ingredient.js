import { SET_INGREDIENT, CLOSE_INGREDIENT_DETAILS } from '../actions/ingredient';

const initialState = {
  ingredient: null,
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT: {
      return {
        ...state,
        ingredient: action.ingredient,
      };
    }
    case CLOSE_INGREDIENT_DETAILS: {
      return {
        ...state,
        isIngredientDetailsOpened: false,
        ingredient: null,
      };
    }
    default: {
      return state;
    }
  }
};
