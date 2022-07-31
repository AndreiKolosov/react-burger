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
} from './interfaces';

type TIngredientsActions = IResetIngredientsError | IGetIngredientsSuccess | IGetIngredientsFailed | IGetIngredientsRequest;
type TConstructorActions = IRemoveItemAction | IResetConstructorAction | IDropItemAction | IReorderIngredientAction;

export type TApplicationActions = TIngredientsActions | TConstructorActions;

export type TIngredientResponse = { data: IIngredient[]; success: boolean };
