import { Action, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { ThunkAction } from 'redux-thunk';

import createRootReducer, { RootState } from './rootReducer';

export const history = createBrowserHistory();

const store = configureStore({
  reducer: createRootReducer(history),
  middleware: getDefaultMiddleware().concat(routerMiddleware(history)),
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
