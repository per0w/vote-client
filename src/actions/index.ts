import {
  Action, State,
} from 'reducers/types';


export const setConnectionState = (connected: boolean): Action => ({
  type: 'SET_CONNECTION_STATE',
  connected,
});

export const setState = (state: Action['state']) => ({
  type: 'SET_STATE',
  state,
});

export const vote = (entry: Action['entry']) => ({
  meta: { remote: true },
  type: 'VOTE',
  entry,
});

export const next = () => ({
  meta: { remote: true },
  type: 'NEXT',
});

export const restart = () => ({
  meta: { remote: true },
  type: 'RESTART',
});
