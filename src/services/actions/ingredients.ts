import api from '../../utils/api';
import { IIngredient, IResetIngredientsError, IGetIngredientsFailed, IGetIngredientsRequest, IGetIngredientsSuccess } from '../../utils/interfaces';
import { AppThunk } from '../store';
import { RESET_INGREDIENTS_ERROR_STATUS, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from '../constants/ingredinets';

export function resetIngredientsError(): IResetIngredientsError {
  return {
    type: RESET_INGREDIENTS_ERROR_STATUS,
  };
}

export function getIngredientsSuccess(res: { data: IIngredient[]; success: boolean }): IGetIngredientsSuccess {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    ingredients: res.data,
  };
}

export function getIngredientsRequest(): IGetIngredientsRequest {
  return {
    type: GET_INGREDIENTS_REQUEST,
  };
}

export function getIngredientsFailed(): IGetIngredientsFailed {
  return {
    type: GET_INGREDIENTS_FAILED,
  };
}

export function getIngredients(): AppThunk {
  return function (dispatch) {
    dispatch(getIngredientsRequest());
    api
      .ingredientsRequest()
      .then((res) => {
        if (res.data) {
          dispatch(getIngredientsSuccess(res));
        }
      })
      .catch((err) => dispatch(getIngredientsFailed()));
  };
}
