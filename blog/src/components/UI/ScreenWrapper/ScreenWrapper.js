import React from "react";

import styles from './screenWrapper.module.scss'

const ScreenWrapper = ({ children }) => {
  return <div className={styles.screenWrapper}>{children}</div>;
};

export default ScreenWrapper;
