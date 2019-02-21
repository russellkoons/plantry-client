import {combineReducers} from 'redux';
import {plantryReducer} from './protected';
import {authReducer} from './auth';

export default combineReducers({
    plantry: plantryReducer,
    auth: authReducer
});