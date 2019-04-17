import React from 'react';
import {
  List, Map,
} from 'immutable';


export interface TallyProps {
  tally: Map<string, number>,
  pair: List<string>,
}

const Tally: React.FC<TallyProps> = ({
  pair, tally,
}) => {
  const getPair = () => pair || [];

  const getVotes = (entry: string) => {
    if (tally && tally.has(entry)) {
      return tally.get(entry);
    }
    return 0;
  };
  return (
    <div className='tally'>
      {getPair().map(entry => (
        <div key={entry} className='entry'>
          <h1>{entry}</h1>
          <div className='voteCount'>
            {getVotes(entry)}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Tally;
