import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import ListItem from '../containers/ListItem';
import Item from '../containers/Item';
import Person from "../containers/Person";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/movies' component={() => (<ListItem/>)}/>
          <Route path='/movies/:id' component={({match}) => (<Item match={match}/>)}/>
          <Route path='/persons/:id' component={({match}) => (<Person match={match}/>)}/>
        </Switch>
      </div>
    )
  }
}
