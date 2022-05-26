export const SET_INGREDIENT = 'SET_INGREDIENT';
export const SET_INGREDIENT_DETAILS_OPEN = 'SET_INGREDIENT_DETAILSL_OPEN';
export const SET_INGREDIENT_DETAILS_CLOSED = 'SET_INGREDIENT_DETAILS_CLOSED';

export function openDetails(item) {
  return function (dispatch) {
    dispatch({ type: SET_INGREDIENT, ingredient: item });
    dispatch({ type: SET_INGREDIENT_DETAILS_OPEN });
  };
}
