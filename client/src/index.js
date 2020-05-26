import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import storeSynchronize from 'redux-localstore';
import { Router as ReactRouter } from 'react-router-dom';
import RouterComponent from './RouterComponent';
import app from './modules';
import history from './services/history';

app.then(({ store }) => {
  storeSynchronize(store);

  render(
    <Provider store={store}>
      <ReactRouter history={history}>
        <RouterComponent />
      </ReactRouter>
    </Provider>,
    document.getElementById('root')
  );
});
