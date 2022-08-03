import { IIngredient } from './interfaces';
import { ICloseOrderModalAction, IResetOrderError, IPostOrderFailed, IPostOrderRequest, IPostOrderSuccess } from './interfaces/order';
import { IGetIngredientsRequest, IGetIngredientsFailed, IGetIngredientsSuccess, IResetIngredientsError } from './interfaces/ingredients';
import { IDropItemAction, IRemoveItemAction, IReorderIngredientAction, IResetConstructorAction } from './interfaces/constructor';
import {
  IResetGetUserErrAction,
  IResetLoginErrAction,
  IResetLogoutErrAction,
  IResetPatchUserErrAction,
  IResetPwdRecoverErrAction,
  IResetPwdResetErrAction,
  IResetRefreshTokenErrAction,
  IResetRegisterErrAction,
  ISetCheckAuthCheckedAction,
  ISetCheckAuthLoadingAction,
  ISetGetUserFailedAction,
  ISetGetUserLoadingAction,
  ISetGetUserSuccessAction,
  ISetLoginFailedAction,
  ISetLoginLoadingAction,
  ISetLoginSuccessAction,
  ISetLogoutFailedAction,
  ISetLogoutLoadingAction,
  ISetLogoutSuccessAction,
  ISetPatchUserFailedAction,
  ISetPatchUserLoadingAction,
  ISetPatchUserSuccessAction,
  ISetPwdRecoverFailedAction,
  ISetPwdRecoverLoadingAction,
  ISetPwdRecoverSuccessAction,
  ISetPwdResetFailedAction,
  ISetPwdResetLoadingAction,
  ISetPwdResetSuccessAction,
  ISetRefreshTokenFailedAction,
  ISetRefreshTokenLoadingAction,
  ISetRefreshTokenSuccessAction,
  ISetRegistrationFailedAction,
  ISetRegistrationLoadingAction,
  ISetRegistrationSuccess,
} from './interfaces/user';
import {
  IWsCloseAction,
  IWsConnectionErrorAction,
  IWsConnectionSuccessAction,
  IWsGetMessageAction,
  IWsInitAction,
  IWsInitWithTokenAction,
  IWsOnCloseAction,
  IWsResetError,
} from './interfaces/ws';

export type TIngredientsActions = IResetIngredientsError | IGetIngredientsSuccess | IGetIngredientsFailed | IGetIngredientsRequest;

export type TConstructorActions = IRemoveItemAction | IResetConstructorAction | IDropItemAction | IReorderIngredientAction;

export type TOrderActions = ICloseOrderModalAction | IResetOrderError | IPostOrderFailed | IPostOrderRequest | IPostOrderSuccess;

export type TWsActions =
  | IWsCloseAction
  | IWsConnectionErrorAction
  | IWsConnectionSuccessAction
  | IWsGetMessageAction
  | IWsInitAction
  | IWsInitWithTokenAction
  | IWsOnCloseAction
  | IWsResetError;

export type TUserActions =
  | IResetRegisterErrAction
  | IResetPwdRecoverErrAction
  | IResetLoginErrAction
  | IResetLogoutErrAction
  | IResetPwdResetErrAction
  | IResetGetUserErrAction
  | IResetPatchUserErrAction
  | IResetRefreshTokenErrAction
  | ISetRegistrationLoadingAction
  | ISetRegistrationFailedAction
  | ISetRegistrationSuccess
  | ISetPwdRecoverLoadingAction
  | ISetPwdRecoverFailedAction
  | ISetPwdRecoverSuccessAction
  | ISetPwdResetLoadingAction
  | ISetPwdResetFailedAction
  | ISetPwdResetSuccessAction
  | ISetLoginLoadingAction
  | ISetLoginFailedAction
  | ISetLoginSuccessAction
  | ISetLogoutLoadingAction
  | ISetLogoutFailedAction
  | ISetLogoutSuccessAction
  | ISetRefreshTokenLoadingAction
  | ISetRefreshTokenFailedAction
  | ISetRefreshTokenSuccessAction
  | ISetGetUserLoadingAction
  | ISetGetUserFailedAction
  | ISetGetUserSuccessAction
  | ISetPatchUserLoadingAction
  | ISetPatchUserFailedAction
  | ISetPatchUserSuccessAction
  | ISetCheckAuthLoadingAction
  | ISetCheckAuthCheckedAction;

export type TApplicationActions = TIngredientsActions | TConstructorActions | TOrderActions | TUserActions | TWsActions;
