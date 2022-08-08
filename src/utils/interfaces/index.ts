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
  _id: string;
  __v?: number;
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
  ingredients: string[];
  name: string;
  number: number;
  price: number;
  status: string;
  updatedAt: string;
  _id: string;
  owner?: IOwner;
}

export interface IError {
  success: boolean;
  message: string;
}

export interface IUser {
  email: string;
  name: string;
}

export interface IWsOrder {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

export interface IWsResponse {
  orders: IWsOrder[];
  success: boolean;
  total: number;
  totalToday: number;
}
