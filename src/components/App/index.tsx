import React, {
  ReactElement,
} from 'react';
import { List } from 'immutable';
import {
  Router, Route, Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Results from 'components/Results';
import Voting from 'components/Voting';


const customHistory = createBrowserHistory();
const pairs = List.of('Bleach', 'Faity Tail');

interface Props {

}

export default (props: Props) => (
  <Router history={customHistory}>
    <div className='App'>
      <Route path='/' exact render={() => <Voting pair={pairs} />} />
      <Route path='/results' component={Results} />
    </div>
  </Router>
);
