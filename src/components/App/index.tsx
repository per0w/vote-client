import React, { Fragment } from 'react';
import {
  Router, Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ConnectionStateContainer } from 'components/ConnectionState';
import { ResultsContainer } from 'components/Results';
import { VotingContainer } from 'components/Voting';


const customHistory = createBrowserHistory();

export interface AppProps {}

const App: React.FC<AppProps> = () => (
  <Fragment>
    <ConnectionStateContainer />
    <Router history={customHistory}>
      <div className='App'>
        <Route path='/' exact component={VotingContainer} />
        <Route path='/results' component={ResultsContainer} />
      </div>
    </Router>
  </Fragment>
);

export default App;
