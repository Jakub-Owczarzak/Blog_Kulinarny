import { combineReducers } from 'redux';

import userReducer from './userReducer';
import profileModalViewReducer from './profileModalViewReducer';
import notificationModalReducer from './notificationModalReducer';
import recipeReducer from './recipeReducer'

const rootReducer = combineReducers({
  user: userReducer,
  recipes:recipeReducer,
  profileModal: profileModalViewReducer,
  notificationModal: notificationModalReducer,
});

export default rootReducer;
