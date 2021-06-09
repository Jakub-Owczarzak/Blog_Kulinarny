import React from 'react';
import styles from './LoginForm.module.scss'

const LoginForm = () => {
    return (
        <div className = {styles.mainWrapper}>
            <button>ZALOGUJ</button>
            <button>ZAREJESTRUJ</button>
        </div>
    )
}

export default LoginForm;