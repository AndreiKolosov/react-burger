import { IIngredient, IOrder, IUser } from '.';

export interface IIngredientResponse {
  data: IIngredient[];
  success: boolean;
}

export interface INewOrderResponse {
  name: string;
  success: boolean;
  order: IOrder;
}

export interface IRegistrationResponse {
  success: boolean;
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface ILogoutResponse {
  success: boolean;
  message: string;
}

export interface IPwdResponse {
  success: boolean;
  message: string;
}

export interface ILoginResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface IRefreshTokenResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
}

export interface IUserResponse {
  success: boolean;
  user: IUser;
}
