import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import rootReducer from './reducers';
export const history = createBrowserHistory();

const middleware = [
    thunk,
    routerMiddleware(history)
];

export default function configureStore() {
    return createStore(
        connectRouter(history)(rootReducer),
        composeWithDevTools(applyMiddleware(...middleware)));
}