import * as actionTypes from '../actions/actionTypes';

const initialState = {
  all: [],
  currentViewProject: null,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHED_ALL_PROJECTS_TO_STATE:
      return {
        ...state,
        all: [...action.payload],
      };
    case actionTypes.FETCHED_SINGLE_PROJECT_TO_STATE:
      return {
        ...state,
        currentViewProject: action.payload,
      };
    case actionTypes.CLEAN_SINGLE_PROJECT:
      return {
        ...state,
        currentViewProject: null,
      };
    // case actionTypes.FETCHED_USERS_SEARCHBAR:
    //   return {
    //     ...state,
    //     all: [...action.payload],
    //   };
    default:
      return {
        ...state,
      };
  }
};

export default projectsReducer;
