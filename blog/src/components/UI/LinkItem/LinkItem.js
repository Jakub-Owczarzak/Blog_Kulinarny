import React from 'react';

import styles from './linkitem.module.scss';

const LinkItem = ({ text, onClick }) => {
  return (
    <span className={styles.span} onClick={onClick}>
      {text}
    </span>
  );
};

export default LinkItem;
