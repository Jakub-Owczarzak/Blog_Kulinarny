import React, {useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
// import ProjectBox from '../../components/Boxes/ProjectBox/ProjectBox';
import {fetchAllRecipesAsync} from '../../actions/recipeActions';
import styles from './RecipeViewer.module.scss';
import RecipeBox from '../RecipeBox';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../UI/Button';
import { openNotificationModal } from '../../actions/notificationModalActions';





const RecipeViewer = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(state=> state.recipes.all);
  const [filteredRecipes,setFilteredRecipes] = useState(recipes);
  const [searchType, setsearchType] = useState('');
  const [searchHard,setsearchHard] = useState('');

  function handleTypeChange(event) {
      setsearchType(event.target.value);
  }
  function handleHardChange(event) {
      setsearchHard(event.target.value);
  }
  const filterRecipe = (type,hard) => {
    let filtredArray=[];
   if(type!== '' && hard === ''){
    filtredArray = recipes.filter((el)=>type ===el.type);
    if(filtredArray.length >0) {
      setFilteredRecipes(filtredArray)
    }
    if(filtredArray.length === 0){
      console.log('dupa')
      dispatch(openNotificationModal('Nie znaleziono wyniku', true))
    }
    
   }
   if(type!== '' && hard !== ''){
    console.log('opcja2',type,hard);
    filtredArray = recipes.filter((el)=>type ===el.type);
    console.log(filtredArray);
    filtredArray = recipes.filter((el)=>hard ===el.difficulty);
    if(filtredArray.length >0) {
      setFilteredRecipes(filtredArray)
    }
   }
  }
  const showAll = () =>{
    setFilteredRecipes(recipes)
  }
  useEffect(()=>{
    if(searchType === ''){
      setsearchHard('')
    }
  },[searchType])
  useEffect(()=>{
    setFilteredRecipes(recipes)
  },[recipes])
  



useEffect(()=>{
  dispatch(fetchAllRecipesAsync());
},[])
console.log(recipes)
  return (
    <div className={styles.screenWrapper}>
      <SearchBar type ={searchType} typeHandler = {handleTypeChange} hard={searchHard} hardHandler={handleHardChange}/>
      {searchType&& <Button title ={'Filtruj'} click ={()=>filterRecipe(searchType,searchHard)}/> }
      <Button title ={'Wyświetl wszystkie'} click ={showAll}/>
    <div className={styles.mainWrapper}>
      <div className={styles.recipeWrapper}>
        {filteredRecipes && filteredRecipes.map((recipe) => <RecipeBox recipe={recipe} />)}
      </div>
    </div>
  </div>
  );
};

export default RecipeViewer;
