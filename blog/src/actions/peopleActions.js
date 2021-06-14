import * as actionTypes from './actionTypes';

export const fetchAllUsers = (data) => {
  return {
    type: actionTypes.FETCHED_USERS_TO_STATE,
    payload: data,
  };
};

export const fetchAllUsersAsync = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('/users');
      const data = await response.json();
      dispatch(fetchAllUsers(data.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchSingleUser = (data) => {
  return { type: actionTypes.FETCH_SINGLE_USER, payload: data };
};

export const fetchSingleUserAsync = (userId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`/users/user/${userId}`);
      const data = await response.json();
      dispatch(fetchSingleUser(data.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchBySearchBar = (data) => {
  return {
    type: actionTypes.FETCHED_USERS_SEARCHBAR,
    payload: data,
  };
};

export const fetchBySearchBarAsync = (spec, city) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`/users/search?spec=${spec}&city=${city}`);
      const data = await response.json();
      dispatch(fetchBySearchBar(data.data));
    } catch (err) {
      console.log(err);
    }
  };
};
