import React from 'react';


export interface WinnerProps {
  winner?: string,
}

export default class Winner extends React.PureComponent<WinnerProps> {
  render() {
    const {
      winner,
    } = this.props;
    return (
      <div className='winner'>
        {`Winner is ${winner}!`}
      </div>
    );
  }
}
