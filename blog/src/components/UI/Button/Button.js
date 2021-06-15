import React from "react";

import styles from "./button.module.scss";

const Button = ({ title, click, action }) => {
  return (
    <button
      className={
        action ? [styles.button, styles.action].join(" ") : styles.button
      }
      onClick={click}
    >
      {title}
    </button>
  );
};

export default Button;
