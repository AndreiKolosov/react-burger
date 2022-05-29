import { SET_INGREDIENT, SET_INGREDIENT_DETAILS_CLOSED } from '../actions/ingredient';

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
    case SET_INGREDIENT_DETAILS_CLOSED: {
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
