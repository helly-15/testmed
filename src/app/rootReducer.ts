import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import authReducer from 'features/auth/authSlice';
import uiPrefReducer from 'features/navigation/navigationSlice';

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    uiPref: uiPrefReducer
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;

export default createRootReducer;
