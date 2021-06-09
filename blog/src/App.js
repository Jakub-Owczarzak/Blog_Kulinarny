
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styles from "./App.module.scss";
import MainView from './views/MainView/MainView';
import LoginView from './views/LoginView/LoginView';
import MenuItem from './components/MenuItem/MenuItem'

function App() {
  return (
    <>
    <Router>
        <nav className = {styles.navWrapper}>
          <div className ={styles.divTitle}>BLOG KULINARNY</div>
          <ul>
            <li>
              <MenuItem to = {'/'} text = {'Home'}/>
            </li>
            <li>
              <MenuItem to = {'/login'} text = {'Zaloguj'} />
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path ="/" exact component={MainView}/>
          <Route path ="/login" component = {LoginView} />
        </Switch>
      
    </Router>
    </>
    
  );
}

export default App;
