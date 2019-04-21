import React from 'react';
import {
  List, Map,
} from 'immutable';
import {
  Router, Route, Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ResultsContainer } from 'components/Results';
import { VotingContainer } from 'components/Voting';


const customHistory = createBrowserHistory();

export interface AppProps {}

const App: React.FC<AppProps> = () => (
  <Router history={customHistory}>
    <div className='App'>
      <Route path='/' exact component={VotingContainer} />
      <Route path='/results' component={ResultsContainer} />
    </div>
  </Router>
);

export default App;
