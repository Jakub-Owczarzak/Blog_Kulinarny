import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import styles from './signupform.module.scss';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { openNotificationModal } from '../../actions/notificationModalActions';

// import LinkItem from '../UI/LinkItem';
// import ErrorMessage from '../UI/ErrorMessage';
// import CustomSelect from '../UI/CustomSelect/CustomSelect';

const SignUpForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formInputsValues, setInputsFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChangeInputValue = (e) => {
    setInputsFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleValidatePageOne = () => {
    let errorsObj = {};
    const emailReg =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (formInputsValues.name.length < 2) {
      errorsObj.name = 'Imię jest za krótkie';
    }
    const emailIsValid = emailReg.test(formInputsValues.email);

    if (!emailIsValid) {
      errorsObj.email = 'Email jest nieprawidłowy';
    }

    if (formInputsValues.password.length < 6) {
      errorsObj.password = 'Hasło jest za krótkie.';
    }

    if (formInputsValues.confirmPassword !== formInputsValues.password) {
      errorsObj.confirmPassword = 'Hasła muszą się zgadzać';
    }

    setErrors(errorsObj);

    return Object.keys(errorsObj).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleValidatePageOne();
    let errorsObj = {};

    const data = {
      name: formInputsValues.name,
      email: formInputsValues.email,
      password: formInputsValues.password,
    };
    console.log(data);

    try {
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const dataResponse = await response.json();

      if (dataResponse.success === false) {
        console.log('jest w ifce modalnpm');
        dispatch(openNotificationModal(dataResponse.message, true));
        return;
      }

      dispatch(
        openNotificationModal(
          'Twoje konto zostało utworzone! Link aktywacyjny został wysłany na Twój mail',
          false
        )
      );
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <h3 className={styles.loginHeader}>Zarejestruj się</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.pageWrapper}>
          <div>
            <Input
              type={'text'}
              label={'Imię'}
              name={'name'}
              onChange={handleChangeInputValue}
              value={formInputsValues.name}
              errorType={errors.name}
            />
            <Input
              type={'text'}
              label={'E-mail'}
              name={'email'}
              onChange={handleChangeInputValue}
              value={formInputsValues.email}
              errorType={errors.email}
            />
            <Input
              type={'password'}
              label={'Hasło (min.6 znaków)'}
              name={'password'}
              onChange={handleChangeInputValue}
              value={formInputsValues.password}
              errorType={errors.password}
            />
            <Input
              type={'password'}
              label={'Potwierdź hasło'}
              name={'confirmPassword'}
              onChange={handleChangeInputValue}
              value={formInputsValues.confirmPassword}
              errorType={errors.confirmPassword}
            />
          </div>

          <div className={styles.infoButtonWrapper}>
            <Button title={'Zarejestruj się'} action />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
