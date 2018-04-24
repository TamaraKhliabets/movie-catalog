import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Item from '../movies/Item';
import PersonReq from "../requests/PersonReq";
import Persons from '../requests/Persons';
import MoviesReq from "../requests/MoviesReq";
import FilterGenreReq from "../requests/FilterGenreReq";
import Home from '../home/Home';
import CollectionReq from "../requests/CollectionReq";

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={() => <Home/>}/>
                    <Route exact path='/movie' component={({match}) => <MoviesReq match={match}/>}/>
                    <Route exact path='/movie/:id' component={({match}) => <Item match={match}/>}/>
                    <Route exact path='/tv' component={({match}) => <MoviesReq match={match}/>}/>
                    <Route exact path='/persons' component={() => <Persons/>}/>
                    <Route path='/genres/:name/:id' component={({match}) => (<FilterGenreReq match={match}/>)}/>
                    <Route path='/tv/:id' component={({match}) => (<Item match={match}/>)}/>
                    <Route path='/persons/:id' component={({match}) => (<PersonReq match={match}/>)}/>
                    <Route path='/collection/:id' component={({match}) => <CollectionReq match={match}/>}/>
                </Switch>
            </div>
        )
    }
}
