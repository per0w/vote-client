import React from 'react';
import {
  List, Map,
} from 'immutable';


interface ResultProps {
  pair: List<string>,
  tally: Map<string, number>,
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
    return (
      <div className='results'>
        {this.getPair().map(entry => (
          <div key={entry} className='entry'>
            <h1>{entry}</h1>
            <div className='voteCount'>
              {this.getVotes(entry)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
