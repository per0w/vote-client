import React from 'react';
import { connect } from 'react-redux';

import Winner, { WinnerProps } from 'components/Winner';
import Vote, { VoteProps } from 'components/Vote';
import { State } from 'reducers/types';
import * as actions from 'actions';


export interface VotingProps extends VoteProps, WinnerProps {}


export default class Voting extends React.PureComponent<VotingProps> {
  render() {
    const {
      winner,
      ...restProps
    } = this.props;
    return (
      <div>
        {winner
          ? <Winner winner={winner} />
          : <Vote {...restProps} />}
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  pair: state.getIn(['vote', 'pair']),
  hasVoted: state.getIn(['myVote', 'entry']),
  winner: state.get('winner'),
});

export const VotingContainer = connect(mapStateToProps, actions)(Voting);
