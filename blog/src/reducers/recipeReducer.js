import * as actionTypes from '../actions/actionTypes';

const initialState = {
  all: [],
  currentViewProject: null,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHED_ALL_RECIPE_TO_STATE:
      return {
        ...state,
        all: [...action.payload],
      };
    case actionTypes.FETCHED_SINGLE_RECIPE_TO_STATE:
      return {
        ...state,
        currentViewProject: action.payload,
      };
    case actionTypes.REMOVE_RECIPE_TO_STATE:
       const filtered = state.all.filter((el)=> el!==action.payload);
        return {
          ...state,
          all: filtered,
        }
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

export default recipeReducer;
