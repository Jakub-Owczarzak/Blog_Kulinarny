import * as actionTypes from '../actions/actionTypes';

const initalState = null;

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.STORE_USER_DATA:
      return {
        ...action.payload,
      };
    case actionTypes.REMOVE_USER_DATA:
      return null;
    default:
      return state;
  }
};

export default userReducer;
