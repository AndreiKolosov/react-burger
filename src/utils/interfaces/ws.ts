import {
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_WITH_TOKEN,
  WS_GET_MESSAGE,
  WS_RESET_ERROR_STATUS,
} from '../../services/constants/ws';
import { IWsOrder, IWsResponse } from '.';

export interface IWsActions {
  wsInit: typeof WS_CONNECTION_START;
  wsClose: typeof WS_CONNECTION_CLOSE;
  onOpen: typeof WS_CONNECTION_SUCCESS;
  onClose: typeof WS_CONNECTION_CLOSED;
  onError: typeof WS_CONNECTION_ERROR;
  onMessage: typeof WS_GET_MESSAGE;
  wsInitWithToken: typeof WS_CONNECTION_WITH_TOKEN;
}

export interface IWsState {
  wsRequest: boolean;
  wsOpen: boolean;
  wsFailed: boolean;
  orders: IWsOrder[] | null;
  total: number | null;
  totalToday: number | null;
}

export interface IWsInitWithTokenAction {
  readonly type: typeof WS_CONNECTION_WITH_TOKEN;
  readonly payload: string;
}

export interface IWsInitAction {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWsConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
}

export interface IWsCloseAction {
  readonly type: typeof WS_CONNECTION_CLOSE;
}

export interface IWsResetError {
  readonly type: typeof WS_RESET_ERROR_STATUS;
}

export interface IWsOnCloseAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: IWsResponse;
}
