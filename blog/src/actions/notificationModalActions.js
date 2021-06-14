import {
  OPEN_NOTIFICATION_MODAL,
  CLOSE_NOTIFICATION_MODAL,
} from './actionTypes';

export const openNotificationModal = (message, error) => ({
  type: OPEN_NOTIFICATION_MODAL,
  payload: { message, error },
});

export const closeNotificationModal = () => ({
  type: CLOSE_NOTIFICATION_MODAL,
});
