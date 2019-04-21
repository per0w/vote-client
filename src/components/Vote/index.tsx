import React from 'react';
import {
  List,
} from 'immutable';


export interface VoteProps {
  pair?: List<string>,
  vote?: (entry: string) => void,
  hasVoted?: string,
}


export default class Voting extends React.PureComponent<VoteProps> {
  getPair = () => {
    const { pair } = this.props;
    return pair || List();
  };

  isDisabled = () => {
    const { hasVoted } = this.props;
    return !!hasVoted;
  };

  hasVotedFor = (entry: string) => {
    const { hasVoted } = this.props;
    return hasVoted === entry;
  };

  render() {
    const {
      vote,
    } = this.props;
    return (
      <div className='voting'>
        {this.getPair().map(entry => (
          <button
            type='button'
            key={entry}
            disabled={this.isDisabled()}
            onClick={() => vote && vote(entry)}
          >
            <h1>{entry}</h1>

            {this.hasVotedFor(entry) && <div className='label'>Voted</div>}
          </button>
        ))}
      </div>
    );
  }
}
