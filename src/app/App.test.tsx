import React from 'react';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import App from './App';
import { RootState } from './rootReducer';

const mockStore = configureStore([thunk]);

jest.mock('components', () => ({
  RouteSwitch: () => 'RouteSwitch'
}));
jest.mock('features/navigation', () => ({
  Navigation: () => 'Navigation'
}));
jest.mock('api/firebase', () => ({
  auth: null
}));
jest.mock('features/auth/authSlice', () => ({
  restoreAuth: () => () => Promise.resolve()
}));

describe('App', () => {
  it('should show route switch component', () => {
    const initialState: Partial<RootState> = {
      uiPref: {
        menuCollapsed: false
      },
      auth: {
        isLoading: false,
        user: null,
        error: null
      }
    };

    const { getByText } = render(
      <Provider store={mockStore(initialState)}>
        <App />
      </Provider>
    );

    expect(getByText(/RouteSwitch/i)).toBeInTheDocument();
  });

  it('should show navigation if user loggedin', () => {
    const initialState: Partial<RootState> = {
      uiPref: {
        menuCollapsed: false
      },
      auth: {
        isLoading: false,
        user: {} as any,
        error: null
      }
    };

    const { getByText } = render(
      <Provider store={mockStore(initialState)}>
        <App />
      </Provider>
    );

    expect(getByText(/Navigation/i)).toBeInTheDocument();
  });

  it('should hide navigation if user not loggedin', () => {
    const initialState: Partial<RootState> = {
      auth: {
        user: null
      } as any
    };

    const { queryByText } = render(
      <Provider store={mockStore(initialState)}>
        <App />
      </Provider>
    );

    expect(queryByText(/Navigation/i)).not.toBeInTheDocument();
  });
});
