import React, {
  ReactElement,
} from 'react';
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
interface Props {}

const App: React.FC<Props> = (props: Props) => (
  <Router history={customHistory}>
    <div className='App'>
      <Route path='/' exact render={() => <Voting pair={pairs} />} />
      <Route path='/results' render={() => <Results pair={pairs} tally={tally} />} />
    </div>
  </Router>
);

export default App;
