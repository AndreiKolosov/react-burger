import {
  RESET_INGREDIENTS_ERROR_STATUS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from '../services/constants/ingredients';
import { ADD, DELETE, REORDER_INGREDIENT, RESET } from '../services/constants/constructor';
import {
  CLOSE_ORDER_DETAILS,
  POST_ORDER_FAILED,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  RESET_ORDER_ERROR_STATUS,
} from '../services/constants/order';

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

export interface IOwner {
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
export interface IOrder {
  createdAt: string;
  ingredients: IIngredient[];
  name: string;
  number: number;
  price: number;
  status: string;
  updatedAt: string;
  _id: string;
  owner: IOwner;
}

export interface IIngredientResponse {
  data: IIngredient[];
  success: boolean;
}

export interface INewOrderResponse {
  name: string;
  success: boolean;
  order: IOrder;
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

//Order
export interface IOrderState {
  orderNumber: number | null;
  orderRequest: boolean;
  orderFailed: boolean;
}

export interface ICloseOrderModalAction {
  readonly type: typeof CLOSE_ORDER_DETAILS;
}

export interface IResetOrderError {
  readonly type: typeof RESET_ORDER_ERROR_STATUS;
}

export interface IPostOrderRequest {
  readonly type: typeof POST_ORDER_REQUEST;
}

export interface IPostOrderFailed {
  readonly type: typeof POST_ORDER_FAILED;
}

export interface IPostOrderSuccess {
  readonly type: typeof POST_ORDER_SUCCESS;
  readonly orderNumber: number;
}
