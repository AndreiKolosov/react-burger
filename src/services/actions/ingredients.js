import { getIngredients } from '../../utils/api';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export function getIngredientsRequest() {
  return function (dispatch) {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    getIngredients()
      .then((res) => {
        dispatch({ type: GET_INGREDIENTS_SUCCESS, ingredients: res.data });
      })
      .catch((err) => dispatch({ type: GET_INGREDIENTS_FAILED }));
  };
}
