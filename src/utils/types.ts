import { IIngredient } from './interfaces';
import {
  IGetIngredientsRequest,
  IGetIngredientsFailed,
  IGetIngredientsSuccess,
  IResetIngredientsError,
  IDropItemAction,
  IRemoveItemAction,
  IReorderIngredientAction,
  IResetConstructorAction,
  ICloseOrderModalAction,
  IResetOrderError,
  IPostOrderFailed,
  IPostOrderRequest,
  IPostOrderSuccess,
} from './interfaces';

export type TIngredientsActions = IResetIngredientsError | IGetIngredientsSuccess | IGetIngredientsFailed | IGetIngredientsRequest;
export type TConstructorActions = IRemoveItemAction | IResetConstructorAction | IDropItemAction | IReorderIngredientAction;
export type TOrderActions = ICloseOrderModalAction | IResetOrderError | IPostOrderFailed | IPostOrderRequest | IPostOrderSuccess;

export type TApplicationActions = TIngredientsActions | TConstructorActions | TOrderActions;
