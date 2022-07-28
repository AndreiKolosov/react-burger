import { v4 as uuidv4 } from 'uuid';
import { IIngredient } from '../../types/types';

export const ADD: 'ADD' = 'ADD';
export const DELETE: 'DELETE' = 'DELETE';
export const RESET: 'RESET' = 'RESET';
export const REORDER_INGREDIENT: 'REORDER_INGREDIENT' = 'REORDER_INGREDIENT';

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

export type TConstructorActions = IRemoveItemAction | IResetConstructorAction | IDropItemAction | IReorderIngredientAction;

export function removeItem(item: IIngredient): IRemoveItemAction {
  return {
    type: DELETE,
    item,
  };
}

export function resetConstructor(): IResetConstructorAction {
  return {
    type: RESET,
  };
}

export function dropItem(item: IIngredient): IDropItemAction {
  return {
    type: ADD,
    item: { ...item, uId: uuidv4() },
  };
}

export function reorderIngredient(dragIndex: number, hoverIndex: number): IReorderIngredientAction {
  return {
    type: REORDER_INGREDIENT,
    dragIndex,
    hoverIndex,
  };
}
