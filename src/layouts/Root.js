import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';

const Root = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default Root;
