import {
  Map, List,
} from 'immutable';

import {
  State, Action,
} from './types';


const setState = (state: State, newState: State) => state.merge(newState);

export default (state: State = Map(), action: Action) => {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    default:
      return state;
  }
};
