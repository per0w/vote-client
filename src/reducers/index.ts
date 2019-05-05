import {
  Map, List,
} from 'immutable';

import {
  State, Action,
} from './types';


const setState = (state: State, newState: State) => state.merge(newState);

const vote = (state: State, entry: Action['entry']) => {
  const currentRound = state.getIn(['vote', 'round']);
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('myVote', Map({
      round: currentRound,
      entry,
    }));
  }
  return state;
};

const resetVote = (state: State) => {
  const votedForRound = state.getIn(['myVote', 'round']);
  const currentRound = state.getIn(['vote', 'round']);
  if (votedForRound !== currentRound) {
    return state.remove('myVote');
  }
  return state;
};

const setConnectionState = (state: State, connectionState?: Map<string, {}>, connected?: boolean) => state.set('connection', Map({
  state: connectionState,
  connected,
}));


// TODO need refactorng to object literals
export default (state: State = Map(), action: Action) => {
  switch (action.type) {
    case 'SET_CONNECTION_STATE':
      return setConnectionState(state, action.state, action.connected);
    case 'SET_STATE':
      return action.state ? resetVote(setState(state, action.state)) : state;
    case 'VOTE':
      return vote(state, action.entry);
    default:
      return state;
  }
};
