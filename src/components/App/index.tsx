import React from 'react';
import {
  List, Map,
} from 'immutable';
import {
  Router, Route, Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Results from 'components/Results';
import Voting from 'components/Voting';


const customHistory = createBrowserHistory();
const pairs = List.of('Bleach', 'Faity Tail');
const tally = Map({
  Bleach: 5, 'Faity Tail': 4,
});
export interface AppProps {}

const App: React.FC<AppProps> = (props) => (
  <Router history={customHistory}>
    <div className='App'>
      <Route path='/' exact render={() => <Voting pair={pairs} />} />
      <Route path='/results' render={() => <Results pair={pairs} tally={tally} />} />
    </div>
  </Router>
);

export default App;
