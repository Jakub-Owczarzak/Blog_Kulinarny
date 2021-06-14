import React from "react";

import styles from "./button.module.scss";

const Button = ({ title, onClick, action }) => {
  return (
    <button
      className={
        action ? [styles.button, styles.action].join(" ") : styles.button
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
