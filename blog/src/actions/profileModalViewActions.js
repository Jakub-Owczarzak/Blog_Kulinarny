import { OPEN_PROFILE_MODAL, CLOSE_PROFILE_MODAL } from './actionTypes';

export const openProfileModal = (userId) => ({
  type: OPEN_PROFILE_MODAL,
  payload: userId,
});

export const closeProfileModal = () => ({ type: CLOSE_PROFILE_MODAL });
