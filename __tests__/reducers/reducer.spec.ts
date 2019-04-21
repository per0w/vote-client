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
});
