import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Item from '../containers/Item';
import PersonReq from "../containers/requests/PersonReq";
import Persons from '../components/Persons';
import MoviesReq from "../containers/requests/MoviesReq";
import TvReq from '../containers/requests/TvReq';
import FilterGenre from "../components/FilterGenre";
import Home from '../components/home/Home';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={() => <Home/>}/>
          <Route exact path='/movies' component={() => <MoviesReq/>}/>
          <Route path='/tv-show' component={() => <TvReq/>}/>
          <Route path='/persons' component={() => <Persons/>}/>
          <Route path='/genres/:name/:id' component={({match}) => (<FilterGenre match={match}/>)}/>
          <Route path='/movies/:id' component={({match}) => <Item match={match}/>}/>
          <Route path='/tv-show/:id' component={({match}) => (<Item match={match}/>)}/>
          <Route path='/persons/:id' component={({match}) => (<PersonReq match={match}/>)}/>
        </Switch>
      </div>
    )
  }
}
