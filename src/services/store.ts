import { createStore, applyMiddleware, compose } from 'redux';
import thunk, { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { rootReducer } from './reducers';
import { socketMiddleware } from '../middleware/socketMiddleware';
import { wsActions } from './actions/ws';
import { wsUrl } from '../utils/variables';
import { TApplicationActions } from '../utils/types';

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export const useAppDispatch = () => useDispatch<AppDispatch & AppThunk>();
export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions)));

export const store = createStore(rootReducer, enhancer);
