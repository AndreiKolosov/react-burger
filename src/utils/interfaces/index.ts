import { DetailedHTMLProps, HTMLAttributes, LiHTMLAttributes } from 'react';

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

export interface IError {
  success: boolean;
  message: string;
}

export interface IUser {
  email: string;
  name: string;
}

export interface IBurgerPlug {
  hover: boolean;
}

export interface IBunPlug extends IBurgerPlug {
  position: 'top' | 'bottom';
}

export interface IFillingElement extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  item: IIngredient;
  deleteHandler: (item: IIngredient) => void;
  index: number;
}

export interface IModalOverlay extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  handleClick: () => void;
}
