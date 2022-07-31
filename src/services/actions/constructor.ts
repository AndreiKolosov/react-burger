import { v4 as uuidv4 } from 'uuid';
import { IIngredient } from '../../utils/interfaces';
import { DELETE, RESET, ADD, REORDER_INGREDIENT } from '../constants/constructor';
import { IResetConstructorAction, IDropItemAction, IRemoveItemAction, IReorderIngredientAction } from '../../utils/interfaces';

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
