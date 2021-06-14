import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './notificationModal.module.scss';
import { closeNotificationModal } from '../../actions/notificationModalActions';

const NotificationModal = () => {
  const { message, error } = useSelector((state) => state.notificationModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeNotificationModal());
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleCloseModal();
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`${styles.mainContainer} ${error && styles.error}`}>
      <p className={styles.message}>{message}</p>
      <div className={styles.closeButton} onClick={handleCloseModal}>
        <span>Zamknij</span>
      </div>
    </div>
  );
};

export default NotificationModal;
