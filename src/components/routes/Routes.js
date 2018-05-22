import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Item from '../movies/Item';
import PersonReq from "../requests/PersonReq";
import Persons from '../requests/Persons';
import MoviesReq from "../requests/MoviesReq";
import FilterGenreReq from "../requests/FilterGenreReq";
import Home from '../requests/Home';
import CollectionReq from "../requests/CollectionReq";
import SearchReq from "../requests/SearchReq";
import TvReq from '../requests/TvReq';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={() => <Home/>}/>
                    <Route exact path='/movie' component={({match, location}) => <MoviesReq match={match} location={location}/>}/>
                    <Route path='/movie/:id' component={({match}) => <Item match={match}/>}/>
                    <Route exact path='/tv' component={({match, location}) => <TvReq match={match} location={location}/>}/>
                    <Route path='/tv/:id' component={({match}) => (<Item match={match}/>)}/>
                    <Route exact path='/persons' component={() => <Persons/>}/>
                    <Route path='/persons/:id' component={({match}) => <PersonReq match={match}/>}/>
                    <Route path='/genres/:name/:id' component={({match, location}) => <FilterGenreReq match={match} location={location}/>}/>
                    <Route path='/collection/:id' component={({match}) => <CollectionReq match={match}/>}/>
                    <Route path='/search' component={({match, location}) => <SearchReq match={match} location={location}/>}/>
                </Switch>
            </div>
        )
    }
}
