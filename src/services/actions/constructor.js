import { v4 as uuidv4 } from 'uuid';

export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const RESET = 'RESET';
export const REORDER_INGREDIENT = 'REORDER_INGREDIENT';

export function removeItem(item) {
  return {
    type: DELETE,
    item,
  };
}

export function resetConstructor() {
  return {
    type: RESET,
  };
}

export function dropItem(item) {
  return {
    type: ADD,
    item: { ...item, uId: uuidv4() },
  };
}

export function reorderIngredient(dragIndex, hoverIndex) {
  return {
    type: REORDER_INGREDIENT,
    dragIndex,
    hoverIndex,
  };
}
