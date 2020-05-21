import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Cart from './pages/cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  );
}
