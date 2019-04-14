import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader/root';


interface Props {
  pair: string[],
}

const Voting = ({ pair }: Props) => {
  const getPair = () => pair || [];

  return (
    <div className='voting'>
      {getPair().map(entry => (
        <button type='button' key={entry}>
          <h1>{entry}</h1>
        </button>
      ))}
    </div>
  );
};

export default hot(Voting);
