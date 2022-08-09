import { IIngredient, TIngredientsType } from '../../../../utils/interfaces';

export interface IIngredientList {
  items: IIngredient[];
  itemsType: TIngredientsType;
}
