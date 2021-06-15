import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
// import ProjectBox from '../../components/Boxes/ProjectBox/ProjectBox';
import {fetchAllRecipesAsync} from '../../actions/recipeActions';
import styles from './RecipeViewer.module.scss';
import RecipeBox from '../RecipeBox'



const RecipeViewer = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(state=> state.recipes.all);
  
  
useEffect(()=>{
  dispatch(fetchAllRecipesAsync());
},[])
console.log(recipes)
  return (
    <div className={styles.screenWrapper}>
    <div className={styles.mainWrapper}>
      <div className={styles.recipeWrapper}>
        {recipes && recipes.map((recipe) => <RecipeBox recipe={recipe} />)}
      </div>
    </div>
  </div>
  );
};

export default RecipeViewer;
