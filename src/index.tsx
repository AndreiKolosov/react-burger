import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import { rootReducer } from './services/reducers';
import { composeEnhancers } from './utils/redux-devtools';
import { socketMiddleware } from './middleware/socketMiddleware';
import { wsActions } from './services/actions/ws';
import { wsUrl } from './utils/variables';

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions)));

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  //<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  //</React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
