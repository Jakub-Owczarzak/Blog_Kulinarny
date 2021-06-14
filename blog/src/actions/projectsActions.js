import * as actionTypes from './actionTypes';

export const fetchAllProjects = (data) => {
  return {
    type: actionTypes.FETCHED_ALL_PROJECTS_TO_STATE,
    payload: data,
  };
};

export const fetchAllProjectsAsync = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('/projects/all');
      const data = await response.json();
      console.log(data)
      dispatch(fetchAllProjects(data.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchSingleProject = (data) => {
  return { type: actionTypes.FETCHED_SINGLE_PROJECT_TO_STATE, payload: data };
};

export const fetchSingleProjectAsync = (userId) => {
  return async (dispatch, getState) => {
    try {
        // TO DO na backendzie fetchowanie pojedynczego projektu
    //   const response = await fetch(`/users/user/${userId}`);
      // const data = await response.json();
      // dispatch(fetchSingleProject(data.data));
    } catch (err) {
      console.log(err);
    }
  };
};

// export const fetchBySearchBar = (data) => {
//   return {
//     type: actionTypes.FETCHED_USERS_SEARCHBAR,
//     payload: data,
//   };
// };

// export const fetchBySearchBarAsync = (spec, city) => {
//   return async (dispatch, getState) => {
//     try {
//       const response = await fetch(`/users/search?spec=${spec}&city=${city}`);
//       const data = await response.json();
//       dispatch(fetchBySearchBar(data.data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
