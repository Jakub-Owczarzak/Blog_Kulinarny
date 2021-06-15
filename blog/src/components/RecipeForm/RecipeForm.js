import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import * as userActions from '../../actions/userActions';
import { openNotificationModal } from '../../actions/notificationModalActions';

import styles from './loginform.module.scss';
import Input from '../UI/Input';
import Button from '../UI/Button';
import LinkItem from '../UI/LinkItem';
import CustomSelect from '../UI/CustomSelect/CustomSelect';


const RecipeForm = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [email, setEmail] = useState('');
  const [textareaHeight, settextareaHeight] = useState(null);
  const [formInputsValues, setInputsFormValues] = useState({
    name: '',
    description: '',
    photo:'',
    ingredients:'',
    time:0

  });
  const [savedRecipeTypes, setsavedRecipeTypes] = useState('');

  const recipetypes = ['przystawka','zupa','danie','deser'];
  const [savedRecipeHarndess, setsavedRecipeHarndess] = useState('');

  const recipehardness = ['łatwy','średni','trudny','mistrzowski'];

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorsObj = {};

    if (formInputsValues.name.length < 6) {
      errorsObj.name = 'Nazwa przepisu jest za krótka';
    }
    if (formInputsValues.time < 0 && formInputsValues.time>= 300) {
      errorsObj.name = 'Podany czas musi być mniejszy od 300 minut';
    }

    if (formInputsValues.description.length > 200) {
      errorsObj.description = 'Max 200 znaków.';
    }
    if (formInputsValues.ingredients.length > 150) {
      errorsObj.description = 'Max 200 znaków.';
    }

    if (Object.keys(errorsObj).length > 0) {
      setErrors(errorsObj);
      return;
    }
            {/* // body ma byc: userId , name, type, difficulty, ingredients, time, description, photoUrl */}

    const userData = {
      name: formInputsValues.name,
      description: formInputsValues.description,
      userId: user.id,
      type:savedRecipeTypes,
      difficulty:savedRecipeHarndess,
      photoUrl:formInputsValues.photo,
      time:formInputsValues.time,
      ingredients:formInputsValues.ingredients
    };

    try {
      const response = await fetch('https://shopkubson.herokuapp.com/recipe/create', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data)

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
              type={'number'}
              label={'Czas przygotowania'}
              name={'time'}
              value={formInputsValues.time}
              onChange={handleChangeInputValue}
              errorType={errors.time}
            />
          
            <CustomSelect
              header={'Typ potrawy'}
              data={recipetypes}
              selectedValue={savedRecipeTypes}
              changeValueFn={setsavedRecipeTypes}
              placeholder="Wybierz typ potrawy"
            />
            
            <CustomSelect
              header={'Poziom trudności'}
              data={recipehardness}
              selectedValue={savedRecipeHarndess}
              changeValueFn={setsavedRecipeHarndess}
              placeholder="Poziom trudności "
            />
             <Input
              type={'textarea'}
              label={'Składniki'}
              name={'ingredients'}
              onChange={handleChangeInputValue}
              value={formInputsValues.ingredients}
              errorType={errors.ingredients}
              textareaHeight={textareaHeight}
            />
              <Input
              type={'textarea'}
              label={'Opis przepisu'}
              name={'description'}
              onChange={handleChangeInputValue}
              value={formInputsValues.description}
              errorType={errors.description}
              textareaHeight={textareaHeight}
            />
            <Input
              type={'text'}
              label={'Podaj link do zdjęcia:'}
              name={'photo'}
              value={formInputsValues.photo}
              onChange={handleChangeInputValue}
              errorType={errors.photo}
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
