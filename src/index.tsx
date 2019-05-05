import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore, applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import io from 'socket.io-client';

import App from 'components/App';
import reducer from 'reducers';
import { State } from 'reducers/types';
import {
  setState, setConnectionState,
} from 'actions';
import remoteActionMiddleware from 'middleware';


// eslint-disable-next-line no-restricted-globals
export const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', (state: State) => store.dispatch(setState(state)));

[
  'connect',
  'connect_error',
  'connect_timeout',
  'reconnect',
  'reconnecting',
  'reconnect_error',
  'reconnect_failed',
].forEach(ev => socket.on(ev, () => store.dispatch(setConnectionState(socket.connected))));


const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware,
)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
