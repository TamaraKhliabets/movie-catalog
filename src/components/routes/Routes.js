import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';

// import ItemReq from '../requests/ItemReq';
// import PersonReq from "../handler/PersonReq";
import Home from '../requests/Home';
import CollectionReq from "../requests/CollectionReq";
import UserPage from "../auth/UserPage";
import Page from "../options/Page";
import ItemPage from "../options/ItemPage";
// import ItemPage from '../options/ItemPage';
// import ItemReq from "../requests/ItemReq";

export default class Routes extends Component {
    render() {
        return (
            <div>
                {/*<header>*/}
                    {/*<Link to={'/'}/>*/}
                {/*</header>*/}
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/:direction' component={Page}/>
                    <Route exact path='/:direction/:id' component={ItemPage}/>
                    {/*<Route path='/person/:id' component={({match}) => <PersonReq match={match}/>}/>*/}
                    <Route path='/collection/:id' component={({match}) => <CollectionReq match={match}/>}/>
                    <Route path='/account' component={() => <UserPage/>}/>
                </Switch>
            </div>
        )
    }
}
