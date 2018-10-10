import {combineReducers} from 'redux-immutable'
import homeReducer from 'reducer/home/homeReducer';

const rootReducer = combineReducers({
    homeReducer
});

export default rootReducer;
