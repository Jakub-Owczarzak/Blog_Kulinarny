import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import * as userActions from '../../actions/userActions';
import { openNotificationModal } from '../../actions/notificationModalActions';

import styles from './loginform.module.scss';
import Input from '../UI/Input';
import Button from '../UI/Button';
import LinkItem from '../UI/LinkItem';

const RecipeForm = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [email, setEmail] = useState('');
  const [textareaHeight, settextareaHeight] = useState(null);
  const [formInputsValues, setInputsFormValues] = useState({
    name: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorsObj = {};

    if (formInputsValues.name.length < 6) {
      errorsObj.name = 'Nazwa przepisu jest za krótka';
    }

    if (formInputsValues.description.length < 6) {
      errorsObj.description = 'Hasło jest za krótkie.';
    }

    if (Object.keys(errorsObj).length > 0) {
      setErrors(errorsObj);
      return;
    }

    const userData = {
      name: formInputsValues.name,
      description: formInputsValues.description,
      userId: user.id,
    };

    try {
      const response = await fetch('http://localhost:8080/recipe/create', {
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

      // dispatch(userActions.storeUserData(data.recipe));
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeInputValue = (e) => {
    settextareaHeight(e.target.scrollHeight);
    console.log(e.target.value);
    setInputsFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className={styles.mainWrapper}>
        <section>
          <h3 className={styles.loginHeader}>Stwórz swój przepis !</h3>
          <p>Pokaż innym swoje przepyszne dania!</p>
          <form onSubmit={handleSubmit}>
            <Input
              type={'text'}
              label={'Nazwa przepisu'}
              name={'name'}
              value={formInputsValues.name}
              onChange={handleChangeInputValue}
              errorType={errors.name}
            />
            <Input
              type={'textarea'}
              label={'Opis projektu'}
              name={'description'}
              onChange={handleChangeInputValue}
              value={formInputsValues.description}
              errorType={errors.description}
              textareaHeight={textareaHeight}
            />
            <div className={styles.buttonContainer}>
              <Button title={'Dodaj przepis'} action />
            </div>
          </form>
          <div className={styles.signupinfo}>
            <p>Wróć do strony głównej</p>
            <Link to="/">
              <LinkItem text={'Wróć'} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default RecipeForm;
