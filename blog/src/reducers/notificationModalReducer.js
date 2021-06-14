import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isOpen: false,
  error: false,
  message: null,
};

const notificationModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_NOTIFICATION_MODAL:
      return {
        isOpen: true,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.CLOSE_NOTIFICATION_MODAL:
      return { isOpen: false, message: null };
    default:
      return state;
  }
};

export default notificationModalReducer;
