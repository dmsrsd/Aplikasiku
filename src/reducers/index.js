import {combineReducers} from 'redux';
import UserReducer from './user';
import ContactReducer from './contactReducer';

const rootReducer = combineReducers({
  UserReducer,
  ContactReducer,
});

export default rootReducer;
