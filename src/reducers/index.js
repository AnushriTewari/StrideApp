import { combineReducers } from 'redux';
import ListReducer from './ListReducer';
import Reducers from './ListReducer';
export default combineReducers({
    Reducers,
    listData: ListReducer
});
