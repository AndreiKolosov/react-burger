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
  uId: string;
  __v: number;
  _id: string;
}

export interface IConstructorState {
  bun: IIngredient | null;
  filling: ReadonlyArray<IIngredient>;
  orderIds: ReadonlyArray<string>;
  totalPrice: number;
}
