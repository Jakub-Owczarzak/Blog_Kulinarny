import React from 'react';
import { useDispatch,useSelector } from 'react-redux';

import styles from './recipebox.module.scss';
import Button from '../UI/Button';
import {removeRecipe} from '../../actions/recipeActions'
const RecipeBox = ({ recipe }) => {
  console.log(recipe)
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  
  console.log(recipe._id)

  
  const removeRecipe = async() => {
    const removeData = {
      recipeId: recipe._id,
      userId: user.id
    }
    try{
      const response = await fetch(`http://localhost:8080/recipe/remove`,{
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(removeData),
      });
      const data = await response.json();
      if(data.success){
        dispatch(removeRecipe(recipe._id))
      }
    } catch(err){
      console.log(err)
    }
   
  }

  return (
    <>
      {recipe && (
        <div className={styles.mainWrapper}>
          <div className={styles.nameImageWrapper}>
              <p className={styles.name}>{recipe.name}</p>
              <p className={styles.author}> Autor {recipe.author.name}</p>
              <div className = {styles.ownerWrapper}>  
                <p className = {styles.owner}>Typ dania {recipe.type}</p>
              <p className = {styles.owner}>Poziom trudności {recipe.difficulty}</p>
              <p className = {styles.owner}> Czas przygotowoania {recipe.time} min</p>
              </div>
          </div>

          <div className={styles.infoWrapper}>
          <div className={styles.desc}>
              <p>Składniki</p>
              <p>{recipe.ingredients}</p>
            </div>
            <div className={styles.desc}>
              <p>Opis przygotowania</p>
              <p>{recipe.description}</p>
            </div>
            <div className={styles.image}>
            {recipe.photoUrl&& <img className={styles.image}   src={recipe.photoUrl} alt="userAvatar" />}
            </div>
          <Button title ={'Usuń przepis'}
          action
          click={removeRecipe}/>
          </div>
          {/* <div className={styles.link}>
            <LinkItem
              text={'Więcej'}
              onClick={() => dispatch(openProfileModal(user._id))}
            />
          </div> */}
        </div>
      )}
    </>
  );
};

export default RecipeBox;
