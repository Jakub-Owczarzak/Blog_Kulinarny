import React from "react";

import styles from "./errorMessage.module.scss";

const ErrorMessage = ({ errorText }) => {
  return <p className={styles.error}>{errorText}</p>;
};

export default ErrorMessage;
