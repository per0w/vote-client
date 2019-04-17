import React from 'react';
import {
  List, Map,
} from 'immutable';


interface ResultProps {
  pair: List<string>,
  tally: Map<string, number>,
  next?: () => void,
}

export default class MyComponent extends React.PureComponent<ResultProps> {
  getPair() {
    const { pair } = this.props;
    return pair || [];
  }

  getVotes(entry: string) {
    const { tally } = this.props;
    if (tally && tally.has(entry)) {
      return tally.get(entry);
    }
    return 0;
  }

  render() {
    const { next } = this.props;
    return (
      <div className='results'>
        <div className='tally'>
          {this.getPair().map(entry => (
            <div key={entry} className='entry'>
              <h1>{entry}</h1>
              <div className='voteCount'>
                {this.getVotes(entry)}
              </div>
            </div>
          ))}
        </div>
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
    );
  }
}
