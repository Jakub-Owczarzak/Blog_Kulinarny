import {
  CLOSE_PROFILE_MODAL,
  OPEN_PROFILE_MODAL,
} from '../actions/actionTypes';

const intialState = {
  isModalOpen: false,
  userId: null,
};

const profileModalViewReducer = (state = intialState, action) => {
  switch (action.type) {
    case OPEN_PROFILE_MODAL:
      return {
        isModalOpen: true,
        userId: action.payload,
      };
    case CLOSE_PROFILE_MODAL:
      return {
        isModalOpen: false,
        userId: null,
      };
    default:
      return { ...state };
  }
};

export default profileModalViewReducer;
