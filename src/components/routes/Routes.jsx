import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../requests/Home';
import Page from '../../containers/pages/Page';
import ItemPage from '../../containers/pages/ItemPage';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:direction" component={Page} />
      <Route exact path="/:direction/:id" component={ItemPage} />
    </Switch>
  </div>
);

export default Routes;
