import React from 'react'
import styles from './MainView.module.css'
import RecipeViewer from '../../components/RecipeViewer/RecipeViewer'
const MainView = () => {
    return (
        <div className = {styles.Wrapper}>
           <RecipeViewer/>
        </div>
    )
    
}

export default MainView;