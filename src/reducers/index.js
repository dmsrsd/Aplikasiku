import {combineReducers} from 'redux';
import UserReducer from './user';
import ContactReducer from './contactReducer';
import AuthReducer from './auth';
import ProfileReducer from './profile';

const rootReducer = combineReducers({
  UserReducer,
  ContactReducer,
  AuthReducer,
  ProfileReducer,
});

export default rootReducer;
