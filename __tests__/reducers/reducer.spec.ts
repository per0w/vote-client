import {
  List, Map, fromJS,
} from 'immutable';

import reducer from 'reducers';


describe('reducer', () => {
  it('handles SET_STATE', () => {
    const initialState = Map({});
    const action = {
      type: 'SET_STATE',
      state: fromJS({
        vote: Map({
          pair: List.of('Bleach', 'Fairy Tail'),
          tally: Map({ Bleach: 1 }),
        }),
      }),
    };
    const nextState = reducer(initialState, action);

    expect(nextState).toEqual(fromJS({
      vote: {
        pair: ['Bleach', 'Fairy Tail'],
        tally: { Bleach: 1 },
      },
    }));
  });
  it('обрабатывает SET_STATE с простой JS-нагрузкой', () => {
    const initialState = Map({});
    const action = {
      type: 'SET_STATE',
      state: fromJS({
        vote: {
          pair: ['Bleach', 'Fairy Tail'],
          tally: { Bleach: 1 },
        },
      }),
    };
    const nextState = reducer(initialState, action);

    expect(nextState).toEqual(fromJS({
      vote: {
        pair: ['Bleach', 'Fairy Tail'],
        tally: { Bleach: 1 },
      },
    }));
  });
  it('обрабатывает SET_STATE без начального состояния', () => {
    const action = {
      type: 'SET_STATE',
      state: fromJS({
        vote: {
          pair: ['Bleach', 'Fairy Tail'],
          tally: { Bleach: 1 },
        },
      }),
    };
    const nextState = reducer(undefined, action);

    expect(nextState).toEqual(fromJS({
      vote: {
        pair: ['Bleach', 'Fairy Tail'],
        tally: { Bleach: 1 },
      },
    }));
  });
  it('handles VOTE by setting myVote', () => {
    const state = fromJS({
      vote: {
        round: 42,
        pair: ['Bleach', 'Fairy Tail'],
        tally: { Bleach: 1 },
      },
    });
    const action = {
      type: 'VOTE', entry: 'Bleach',
    };
    const nextState = reducer(state, action);

    expect(nextState).toEqual(fromJS({
      vote: {
        round: 42,
        pair: ['Bleach', 'Fairy Tail'],
        tally: { Bleach: 1 },
      },
      myVote: {
        round: 42,
        entry: 'Bleach',
      },
    }));
  });
  it('в случае неправильной записи не назначает myVote для VOTE', () => {
    const state = fromJS({
      vote: {
        round: 42,
        pair: ['Bleach', 'Fairy Tail'],
        tally: { Bleach: 1 },
      },
    });
    const action = {
      type: 'VOTE', entry: 'One Piece',
    };
    const nextState = reducer(state, action);

    expect(nextState).toEqual(fromJS({
      vote: {
        round: 42,
        pair: ['Bleach', 'Fairy Tail'],
        tally: { Bleach: 1 },
      },
    }));
  });
  it('removes myVote on SET_STATE if round has changed', () => {
    const initialState = fromJS({
      vote: {
        round: 42,
        pair: ['Bleach', 'Fairy Tail'],
        tally: { Bleach: 1 },
      },
      myVote: {
        round: 42,
        entry: 'Bleach',
      },
    });
    const action = {
      type: 'SET_STATE',
      state: fromJS({
        vote: {
          round: 43,
          pair: ['One Piece', 'Code Geass'],
        },
      }),
    };
    const nextState = reducer(initialState, action);

    expect(nextState).toEqual(fromJS({
      vote: {
        round: 43,
        pair: ['One Piece', 'Code Geass'],
      },
    }));
  });
});
