import React, { Fragment } from 'react';
import {
  List,
} from 'immutable';
import { connect } from 'react-redux';

import Winner, { WinnerProps } from 'components/Winner';
import Tally, { TallyProps } from 'components/Tally';
import { State } from 'reducers/types';
import * as actions from 'actions';


export interface ResultProps extends TallyProps, WinnerProps {
  pair: List<string>,
  next?: () => void,
  restart?: () => void,
}

export default class Results extends React.PureComponent<ResultProps> {
  render() {
    const {
      next,
      restart,
      winner,
      tally,
      pair,
    } = this.props;
    return (
      <Fragment>
        { winner ? (
          <Fragment>
            <Winner winner={winner} />
            <button
              type='button'
              className='Restart'
              onClick={restart}
            >
                  Restart
            </button>
          </Fragment>
        )
          : (
            <div className='results'>
              <Tally tally={tally} pair={pair} />
              <div className='management'>
                <button
                  type='button'
                  className='Restart'
                  onClick={restart}
                >
            Restart
                </button>
                <button
                  type='button'
                  className='next'
                  onClick={next}
                >
            Next
                </button>
              </div>
            </div>
          )
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state: State) => ({
  pair: state.getIn(['vote', 'pair']),
  tally: state.getIn(['vote', 'tally']),
  winner: state.get('winner'),
});

export const ResultsContainer = connect(mapStateToProps, actions)(Results);
