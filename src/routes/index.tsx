import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import MyList from '../pages/MyList';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/details/:type/:id" component={Details} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/mylist" component={MyList} />
  </Switch>
);

export default Routes;
