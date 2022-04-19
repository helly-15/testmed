import './styles/index.scss';
import './styles/theme.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ConnectedRouter } from 'connected-react-router';

import store, { history } from 'app/store';

const render = () => {
  const App = require('./app/App').default;

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render);
}
