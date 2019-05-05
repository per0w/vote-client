import {
  Middleware, Dispatch,
} from 'redux';

import {
  Action, State,
} from 'reducers/types';

import { socket } from '..';


const remoteActionMiddleware: Middleware = (store) => (next: Dispatch) => (action: Action) => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
};

export default remoteActionMiddleware;
