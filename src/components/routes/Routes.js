import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../requests/Home';
import Page from "../../containers/pages/Page";
import ItemPage from "../../containers/pages/ItemPage";

// import UserPage from "../auth/UserPage";

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/:direction' component={Page}/>
                    <Route exact path='/:direction/:id' component={ItemPage}/>
                    {/*<Route path='/collection/:id' component={CollectionReq}/>*/}
                    {/*<Route path='/account' component={() => <UserPage/>}/>*/}
                </Switch>
            </div>
        )
    }
}
