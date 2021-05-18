import React, { Component } from "react";
import { Redirect} from 'react-router';
import Auth from "./common/auth.component";


 class Logout extends Component {
  constructor(props) {
    super(props);
  
    //sessionStorage.setItem('IsLoggedIn', '');
  }

  
  render() {
        console.log('Clear called');
        localStorage.removeItem("user");
        sessionStorage.setItem('IsLoggedIn', false);
        Auth.signout();
        sessionStorage.clear();
    return (
      
       < Redirect to='/login'></Redirect>
    );
  }
}

export default Logout;