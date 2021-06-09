import React from 'react'
import styles from './LoginView.module.css';
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginView = () => {
    return (
        <div className = {styles.mainWrapper}>
            <LoginForm/>
        </div>
    )
}

export default LoginView;