import { ADD, DELETE, REORDER_INGREDIENT, RESET } from '../../services/constants/constructor';
import { IIngredient } from '.';

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
  readonly item: IIngredient;
}

export interface IReorderIngredientAction {
  readonly type: typeof REORDER_INGREDIENT;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}
