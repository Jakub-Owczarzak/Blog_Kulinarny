import React from 'react'
import {Link} from 'react-router-dom';
import styles from './MenuItem.module.css'

const MenuItem = ({to,text}) => {
    return (
        <div className = {styles.divWrapper}>
            <Link className= {styles.textLink} to={to}>{text}</Link>
        </div>
    )
}
export default MenuItem;