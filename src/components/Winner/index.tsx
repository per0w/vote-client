import React from 'react';


export interface WinnerProps {
  winner?: string,
}

export default ({ winner }: WinnerProps) => (
  <div className='winner'>
    {`Winner is ${winner}!`}
  </div>
);
