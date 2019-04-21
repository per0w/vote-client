import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import io from 'socket.io-client';

import App from 'components/App';
import reducer from 'reducers';
import { State } from 'reducers/types';


const store = createStore(reducer);

// eslint-disable-next-line no-restricted-globals
const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', (state: State) => store.dispatch({
  type: 'SET_STATE', state,
}));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
