import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import {withRouter} from 'react-router';
import Login from './components/login';
import Landing from './components/landing.component';
import Content from './components/content.component';
import UserList from './components/content.component';
import Logout from './components/logout.component';
import BaseNavigation from './components/basenav.component';
import ModalArea from './components/layout/modalarea.component';
import { useHistory } from "react-router-dom";
import ProductsList from './components/layout/productslistcontentarea.component';

//Protected Route
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

function App() {
  let history = useHistory();
  return (
    <Router>
     
     <Route path="/" exact component={Login}/>
      <ProtectedRoute path="/content" exact component={Content} loggedIn={sessionStorage.getItem('IsLoggedIn')}/>
      <ProtectedRoute path="/dashboard" exact component={ProductsList} loggedIn={sessionStorage.getItem('IsLoggedIn')}/>
      <ProtectedRoute path="/deleteuser/:userid" exact component={UserList} loggedIn={sessionStorage.getItem('IsLoggedIn')}/>
      <Route path="/logout" exact component={Logout}/>
      <Route path="/tag"  component={ModalArea}/>
      <Route path="/login" exact component={Login}/>
    </Router>
  );
}
//<ProtectedRoute path="/" component={BaseNavigation}  loggedIn={sessionStorage.getItem('IsLoggedIn')}/>

export default App;
