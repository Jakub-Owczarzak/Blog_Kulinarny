import * as actionTypes from './actionTypes';

export const storeUserData = (data) => {
  return {
    type: actionTypes.STORE_USER_DATA,
    payload: data,
  };
};

export const removeUserData = () => {
  return {
    type: actionTypes.REMOVE_USER_DATA,
  };
};
