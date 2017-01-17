import React from 'react'; //eslint-disable-line no-unused-vars
import { render } from 'react-dom';
import { Provider } from 'react-redux';//eslint-disable-line no-unused-vars
import Actions from 'actions'; //eslint-disable-line no-unused-vars
import { createStore, INITIAL_STATE } from 'store-config';
import MaterialThemeProvider from 'material-ui/styles/MuiThemeProvider';//eslint-disable-line no-unused-vars
import Root from 'Root';//eslint-disable-line no-unused-vars

render(
  <Provider store={ createStore(INITIAL_STATE) }>
    <MaterialThemeProvider>
      <Root/>
    </MaterialThemeProvider>
  </Provider>,
  document.getElementById('root')
);
