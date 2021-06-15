import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import * as userActions from '../../actions/userActions';
import { openNotificationModal } from '../../actions/notificationModalActions';

import styles from './LoginForm.module.scss';
import Input from '../UI/Input';
import Button from '../UI/Button';
import LinkItem from '../UI/LinkItem';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorsObj = {};
    const emailReg =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const emailIsValid = emailReg.test(email);

    if (!emailIsValid) {
      errorsObj.email = 'Email jest nieprawidłowy';
    }

    if (password.length < 6) {
      errorsObj.password = 'Hasło jest za krótkie.';
    }

    if (Object.keys(errorsObj).length > 0) {
      setErrors(errorsObj);
      return;
    }

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch('https://shopkubson.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!data.success) {
        dispatch(openNotificationModal(data.message, true));
        return;
      }

      dispatch(userActions.storeUserData(data.user));
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.mainWrapper}>
        <section>
          <h3 className={styles.loginHeader}>Zaloguj się</h3>
          <p>Bądź aktywny i twórz projekty z innymi.</p>
          <form onSubmit={handleSubmit}>
            <Input
              type={'text'}
              label={'E-mail'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              errorType={errors.email}
            />
            <Input
              type={'password'}
              label={'Password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              errorType={errors.password}
            />
            <Link to="/requestpassword">
              <LinkItem text={'Nie pamiętam hasła'} />
            </Link>
            <div className={styles.buttonContainer}>
              <Button title={'Zaloguj się'} action />
            </div>
          </form>
          <div className={styles.signupinfo}>
            <p>Nie masz konta na naszej stronie</p>
            <Link to="/signup">
              <LinkItem text={'Dołącz teraz'} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginForm;
