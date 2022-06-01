export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const RESET = 'RESET';

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

export function addItem(item) {
  return {
    type: ADD,
    item,
  };
}
