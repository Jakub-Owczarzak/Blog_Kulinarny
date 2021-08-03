import React,{useState} from 'react'
import styles from './SearchBar.module.scss'

const SearchBar = ({type,typeHandler,hard,hardHandler}) => {
    // const recipetypes = ['przystawka','zupa','danie','deser'];
    // const recipehardness = ['łatwy','średni','trudny','mistrzowski'];

    

    return (
        <div className= {styles.BarWarpper} >
            <div className= {styles.SearchWrapper}>
                <div className={styles.SearchType}>
                <label for="TYPE">Wybierz typ </label>
                <select name="TYPE" id="TYPE" value={type} onChange={typeHandler}>
                <option value="">Wybierz typ</option>
                <option value="przystawka">przystawka</option>
                <option value="zupa">zupa</option>
                <option value="danie">danie</option>
                <option value="deser">deser</option>
                </select>
                </div>
                {type && (<div className={styles.SearchType}>
                <label for="HARD">Wybierz trudność: </label>
                <select name="HARD" id="HARD" value={hard} onChange={hardHandler}>
                <option value="">Wybierz trudność</option>
                <option value="łatwy">łatwy</option>
                <option value="średni">średni</option>
                <option value="trudny">trudny</option>
                <option value="mistrzowski">mistrzowski</option>
                </select>
                </div>)}
                
                
                
            </div>
        </div>
    )
}
export default SearchBar