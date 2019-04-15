import React from 'react';

import Winner, { WinnerProps } from 'components/Winner';
import Vote, { VoteProps } from 'components/Vote';


export interface VotingProps extends VoteProps, WinnerProps {}

export default ({
  winner, ...props
}: VotingProps) => (
  <div>
    {winner
      ? <Winner winner={winner} />
      : <Vote {...props} />}
  </div>
);
