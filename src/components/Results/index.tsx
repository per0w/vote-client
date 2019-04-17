import React, { Fragment } from 'react';
import {
  List,
} from 'immutable';

import Winner, { WinnerProps } from 'components/Winner';
import Tally, { TallyProps } from 'components/Tally';


export interface ResultProps extends TallyProps, WinnerProps {
  pair: List<string>,
  next?: () => void,
}

export default class MyComponent extends React.PureComponent<ResultProps> {
  render() {
    const {
      next,
      winner,
      tally,
      pair,
    } = this.props;
    return (
      <Fragment>
        { winner ? <Winner winner={winner} />
          : (
            <div className='results'>
              <Tally tally={tally} pair={pair} />
              <div className='management'>
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
