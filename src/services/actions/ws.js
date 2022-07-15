export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_CLOSE = 'WS_CONNECTION_CLOSE';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE';
export const WS_CONNECTION_WITH_TOKEN = 'WS_CONNECTION_WITH_TOKEN';
export const WS_RESET_ERROR_STATUS = 'WS_RESET_ERROR_STATUS';

export const wsInit = () => {
  return {
    type: WS_CONNECTION_START,
  };
};

export const wsConnectionSuccess = () => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionError = () => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsClose = () => {
  return {
    type: WS_CONNECTION_CLOSE,
  };
};

export const wsInitWithToken = (url) => {
  return {
    type: WS_CONNECTION_WITH_TOKEN,
    payload: url,
  };
};

export const wsResetError = () => {
  return {
    type: WS_RESET_ERROR_STATUS,
  };
};

export const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsClose: WS_CONNECTION_CLOSE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
  wsInitWithToken: WS_CONNECTION_WITH_TOKEN,
};
