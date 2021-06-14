import { combineReducers } from 'redux';

import userReducer from './userReducer';
import profileModalViewReducer from './profileModalViewReducer';
import notificationModalReducer from './notificationModalReducer';
import projectsReducer from './projectsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  projects:projectsReducer,
  profileModal: profileModalViewReducer,
  notificationModal: notificationModalReducer,
});

export default rootReducer;
