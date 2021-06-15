import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './App.module.scss';
import MainView from './views/MainView/MainView';
import Login from './views/LoginScreen';

import MenuItem from './components/MenuItem/MenuItem';
import SignupScreen from './views/SignupScreen';
import RecipeForm from './views/RecipeFormScreen';
import NotificationModal from './components/NotificationModal';
import { storeUserData } from './actions/userActions';

function App() {
  const { isOpen, error } = useSelector((state) => state.notificationModal);
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  return (
    <>
      {isOpen && <NotificationModal error={error} />}

      <nav className={styles.navWrapper}>
        <div className={styles.divTitle}>BLOG KULINARNY</div>
        <ul>
          <li>
            <MenuItem to={'/'} text={'Home'} />
          </li>
          {user && (
            <li>
              <MenuItem to={'/createrecipe'} text={'Dodaj przepis'} />
            </li>
          )}
          <li>
            <MenuItem to={'/login'} text={'Zaloguj'} />
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={MainView} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignupScreen} />
        
        <Route path="/createrecipe" component={RecipeForm} />
      </Switch>
    </>
  );
}

export default App;
