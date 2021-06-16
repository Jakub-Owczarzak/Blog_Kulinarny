import { Switch, Route, NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import styles from './App.module.scss';
import MainView from './views/MainView/MainView';
import Login from './views/LoginScreen';

import MenuItem from './components/MenuItem/MenuItem';
import SignupScreen from './views/SignupScreen';
import RecipeForm from './views/RecipeFormScreen';
import NotificationModal from './components/NotificationModal';
import {  removeUserData } from './actions/userActions';

function App() {
  const { isOpen, error } = useSelector((state) => state.notificationModal);
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    dispatch(removeUserData());
  };
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
          {user ? (
            <NavLink to="/" onClick={handleLogOut}>
              Wyloguj
            </NavLink>
          ) : (
            <li>
              <MenuItem to={'/login'} text={'Zaloguj'} />
            </li>
          )}
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
