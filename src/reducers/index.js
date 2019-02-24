import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {plantryReducer} from './protected';
import {authReducer} from './auth';

export default (history) => combineReducers({
    plantry: plantryReducer,
    auth: authReducer,
    router: connectRouter(history)
});