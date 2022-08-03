import {
  IWsActions,
  IWsCloseAction,
  IWsConnectionErrorAction,
  IWsConnectionSuccessAction,
  IWsGetMessageAction,
  IWsInitAction,
  IWsInitWithTokenAction,
  IWsOnCloseAction,
  IWsResetError,
  IWsResponse,
} from '../../utils/interfaces/ws';
import { TWsActions } from '../../utils/types';
import {
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_WITH_TOKEN,
  WS_GET_MESSAGE,
  WS_RESET_ERROR_STATUS,
} from '../constants/ws';

export const wsInitWithToken = (url: string): IWsInitWithTokenAction => {
  return {
    type: WS_CONNECTION_WITH_TOKEN,
    payload: url,
  };
};
export const wsInit = (): IWsInitAction => ({ type: WS_CONNECTION_START });
export const wsConnectionSuccess = (): IWsConnectionSuccessAction => ({ type: WS_CONNECTION_SUCCESS });
export const wsConnectionError = (): IWsConnectionErrorAction => ({ type: WS_CONNECTION_ERROR });
export const wsClose = (): IWsCloseAction => ({ type: WS_CONNECTION_CLOSE });
export const wsResetError = (): IWsResetError => ({ type: WS_RESET_ERROR_STATUS });
export const wsOnClose = (): IWsOnCloseAction => ({ type: WS_CONNECTION_CLOSED });
export const wsGetMessage = (res: IWsResponse): IWsGetMessageAction => ({ type: WS_GET_MESSAGE, payload: res });

export const wsActions: IWsActions = {
  wsInit: WS_CONNECTION_START,
  wsClose: WS_CONNECTION_CLOSE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
  wsInitWithToken: WS_CONNECTION_WITH_TOKEN,
};
