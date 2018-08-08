import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import ItemReq from '../requests/ItemReq';
import PersonReq from "../handler/PersonReq";
import MoviesReq from "../handler/MoviesReq";
import FilterGenreReq from "../handler/FilterGenreReq";
import Home from '../requests/Home';
import CollectionReq from "../requests/CollectionReq";
import SearchReq from "../handler/SearchReq";
import TvReq from '../handler/TvReq';
import PersonsReq from "../handler/PersonsReq";
import UserPage from "../auth/UserPage";
import Page from "../options/Page";

export default class Routes extends Component {
    render() {

        return (
            <div>
                <Switch>
                    <Route exact path='/' component={() => <Home/>}/>
                    <Route exact path='/:direction?' component={Page}/>
                    <Route path='/movie/:id' component={({match}) => <ItemReq match={match}/>}/>
                    <Route exact path='/tv'
                           component={({match, location}) => <TvReq match={match} location={location}/>}/>
                    <Route path='/tv/:id' component={({match}) => (<ItemReq match={match}/>)}/>
                    <Route exact path='/persons'
                           component={({match, location}) => <PersonsReq match={match} location={location}/>}/>
                    <Route path='/persons/:id' component={({match}) => <PersonReq match={match}/>}/>
                    <Route path='/genres/:name/:id'
                           component={({match, location}) => <FilterGenreReq match={match} location={location}/>}/>
                    <Route path='/collection/:id' component={({match}) => <CollectionReq match={match}/>}/>
                    <Route path='/search'
                           component={({match, location}) => <SearchReq match={match} location={location}/>}/>
                    <Route path='/account' component={() => <UserPage/>}/>
                </Switch>
            </div>
        )
    }
}
