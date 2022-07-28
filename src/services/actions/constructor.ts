import { v4 as uuidv4 } from 'uuid';
import { IIngredient } from '../../types/types';

export const ADD: 'ADD' = 'ADD';
export const DELETE: 'DELETE' = 'DELETE';
export const RESET: 'RESET' = 'RESET';
export const REORDER_INGREDIENT: 'REORDER_INGREDIENT' = 'REORDER_INGREDIENT';

export interface IRemoveItem {
  readonly type: typeof DELETE;
  readonly item: IIngredient;
}

export interface IResetConstructor {
  readonly type: typeof RESET;
}

export interface IDropItem {
  readonly type: typeof ADD;
  item: IIngredient;
}

export interface IReorderIngredient {
  readonly type: typeof REORDER_INGREDIENT;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}

export function removeItem(item: IIngredient): IRemoveItem {
  return {
    type: DELETE,
    item,
  };
}

export function resetConstructor(): IResetConstructor {
  return {
    type: RESET,
  };
}

export function dropItem(item: IIngredient): IDropItem {
  return {
    type: ADD,
    item: { ...item, uId: uuidv4() },
  };
}

export function reorderIngredient(dragIndex: number, hoverIndex: number): IReorderIngredient {
  return {
    type: REORDER_INGREDIENT,
    dragIndex,
    hoverIndex,
  };
}
