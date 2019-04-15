import React, { Fragment } from 'react';
import {
  List,
} from 'immutable';


export interface VoteProps {
  pair?: List<string>,
  vote?: (entry: string) => void,
  hasVoted?: string,
}

const Voting = ({
  pair, vote, hasVoted,
}: VoteProps) => {
  const getPair = () => pair || List();
  const isDisabled = () => !!hasVoted;
  const hasVotedFor = (entry: string) => hasVoted === entry;

  return (
    <div className='voting'>
      {getPair().map(entry => (
        <button
          type='button'
          key={entry}
          disabled={isDisabled()}
          onClick={() => vote && vote(entry)}
        >
          <h1>{entry}</h1>

          {hasVotedFor(entry) && <div className='label'>Voted</div>}
        </button>
      ))}
    </div>
  );
};

export default Voting;
