import React, { useState, useEffect } from 'react';

import styles from './input.module.scss';
import ErrorMessage from '../ErrorMessage';

const Input = ({
  type,
  value,
  onChange,
  label,
  name,
  onBlur,
  errorType,
  placeholder,
  textareaHeight,
}) => {
  // const [textareaHeight, settextareaHeight] = useState(null);

  // const textAreaAdjust = (event, value) => {
  //   console.log(event.target.scrollHeight);
  //   settextareaHeight(event.target.scrollHeight);
  // };

  useEffect(() => {}, [textareaHeight]);

  return (
    <>
      {type === 'textarea' ? (
        <div className={styles.inputWrapper}>
          <textarea
            className={styles.textarea}
            style={{ height: `${textareaHeight}px` }}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            autoComplete="off"
            name={name}
            required
            maxLength={255}
            // onKeyDown={(event, value) => textAreaAdjust(event)}
          />
          <label className={styles.textareaLabel}>{label}</label>
        </div>
      ) : (
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            autoComplete="off"
            name={name}
            required
          />
          <label className={styles.label}>{label}</label>
        </div>
      )}

      {/* <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete="off"
          name={name}
          required
        />
        <label className={styles.label}>{label}</label>
      </div> */}
      {errorType && <ErrorMessage errorText={errorType} />}
    </>
  );
};

export default Input;
