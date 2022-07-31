import {
  RESET_INGREDIENTS_ERROR_STATUS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from '../services/constants/ingredinets';
import { ADD, DELETE, REORDER_INGREDIENT, RESET } from '../services/constants/constructor';

export interface IIngredient {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
  uId?: string;
  qty?: number;
}

// Ingredients
export interface IIngredientsState {
  ingredients: IIngredient[];
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
}

export interface IResetIngredientsError {
  readonly type: typeof RESET_INGREDIENTS_ERROR_STATUS;
}

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: IIngredient[];
}

// Constructor
export interface IConstructorState {
  bun: IIngredient | null;
  filling: ReadonlyArray<IIngredient>;
  orderIds: ReadonlyArray<string>;
  totalPrice: number;
}

export interface IRemoveItemAction {
  readonly type: typeof DELETE;
  readonly item: IIngredient;
}

export interface IResetConstructorAction {
  readonly type: typeof RESET;
}

export interface IDropItemAction {
  readonly type: typeof ADD;
  item: IIngredient;
}

export interface IReorderIngredientAction {
  readonly type: typeof REORDER_INGREDIENT;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}
