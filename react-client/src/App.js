import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Redirect, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import Login from './components/login';
import Logout from './components/logout.component';
import { useHistory } from "react-router-dom";
import ProductsList from './components/layout/productslistcontentarea.component';
import createHistory from 'history/createBrowserHistory';
import Auth from "./components/common/auth.component";
//Protected Route
const history = createHistory();   

const ProtectedRoute = ({ component: Comp, loggedIn, path   }) => {
  return (
    <Route
      path={path}
      render={(props) => {
        return loggedIn ? (
          <Comp {...props}/>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                prevLocation: path,
                error: "You need to login first!",
              },
            }}
          />
        );
      }}
    />
  );
};

function PrivateRoute ({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={props =>
      Auth.getAuth() ? (
      <Component {...props} />
      ) : (
      <Redirect
      to={{
      pathname: "/login"
      }} />
      )
    }
  />
  )
}
function App() {
  let history = useHistory();
  return (
    <Router history={history}>
      <Route
                exact
                path="/"
                render={() => {
                    return (
                     
                      <Redirect to="/home" />
                    )
                }}
              />
    
      <PrivateRoute path="/home"  exact component={ ()=> <ProductsList/>} loggedIn={sessionStorage.getItem('IsLoggedIn')}/>
      <Route path="/logout" exact component={Logout}/>
      <Route path="/login" exact component={()=><Login/>}/>
    </Router>
  );
}
//<ProtectedRoute path="/" component={BaseNavigation}  loggedIn={sessionStorage.getItem('IsLoggedIn')}/>

export default App;
