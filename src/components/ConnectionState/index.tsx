import React from 'react';
import {
  List, Map,
} from 'immutable';
import { connect } from 'react-redux';


export interface ConnectionStateProps {
  connected?: string,
  state?: boolean,
}

export default class ConnectionState extends React.PureComponent<ConnectionStateProps> {
  isVisible = () => {
    const { connected } = this.props;
    return !connected;
  }

  getMessage = () => 'Not connected';

  render() {
    return (
      <div
        className='connectionState'
        style={{ display: this.isVisible() ? 'block' : 'none' }}
      >
        {this.getMessage()}
      </div>
    );
  }
}
export const ConnectionStateContainer = connect(
  (state: Map<string, any>) => state.get('connection', Map()).toJS(),
)(ConnectionState);
