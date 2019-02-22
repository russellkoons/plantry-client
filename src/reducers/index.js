import {combineReducers} from 'redux';
import {plantryReducer} from './protected';
import {authReducer} from './auth';

const rootReducer = combineReducers({
    plantry: plantryReducer,
    auth: authReducer
});

export default rootReducer;