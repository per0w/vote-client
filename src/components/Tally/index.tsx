import React from 'react';
import {
  List, Map,
} from 'immutable';


export interface TallyProps {
  tally: Map<string, number>,
  pair: List<string>,
}

export default class Tally extends React.PureComponent<TallyProps> {
  getPair = () => {
    const { pair } = this.props;
    return pair || [];
  }

  getVotes = (entry: string) => {
    const { tally } = this.props;
    if (tally && tally.has(entry)) {
      return tally.get(entry);
    }
    return 0;
  };

  render() {
    const {
      tally,
      pair,
    } = this.props;
    return (
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
    );
  }
}
