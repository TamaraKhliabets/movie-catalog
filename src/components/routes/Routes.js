import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../requests/Home';
import CollectionReq from "../requests/CollectionReq";
import UserPage from "../auth/UserPage";
import Page from "../options/Page";
import ItemPage from "../options/ItemPage";

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/:direction' component={Page}/>
                    <Route exact path='/:direction/:id' component={ItemPage}/>
                    {/*<Route path='/person/:id' component={ItemPage}/>*/}
                    <Route path='/collection/:id' component={({match}) => <CollectionReq match={match}/>}/>
                    <Route path='/account' component={() => <UserPage/>}/>
                </Switch>
            </div>
        )
    }
}
