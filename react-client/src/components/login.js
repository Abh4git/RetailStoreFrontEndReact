import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {withRouter} from 'react-router-dom';
import { Redirect} from 'react-router';
import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

 class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      roles:"",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();
    sessionStorage.setItem('IsLoggedIn', false);
    //if (this.checkBtn.context._errors.length === 0) {
      if (this.state.username=='joe'  &&  this.state.password=='test')
    {

      sessionStorage.setItem('user', this.state.username);
      sessionStorage.setItem('IsLoggedIn', true);
       this.props.history.push("/content");

    } else

    {
      this.setState({
        loading: false
      });
    }
/*      AuthService.login(this.state.username, this.state.password).then(
        () => {
          
          var current_user = AuthService.getCurrentUser();
          if (current_user)
          {
          //console.log("User :", current_user)
          var user_roles = current_user.roles;
          console.log("User roles:", user_roles);
          var doesInclude =user_roles.includes("ROLE_ADMIN");
          console.log('Does include', doesInclude);
          if (user_roles.includes("ROLE_ADMIN"))
          {
            sessionStorage.setItem('user', this.state.username);
            sessionStorage.setItem('IsLoggedIn', true);
             this.props.history.push("/content");
          }
          else
          {
            this.setState({message:'Unauthorized'});
          }
          //window.location.reload();
        }
         
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });*/
    //}
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar  navbar-light  bg-primary" >
      <span className="navbar-brand mb-0 h1">Navbar</span>
      </nav>
        <div className="row justify-content-md-center">
        
        <div class="col-md-auto">
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block rounded-pill"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
        </div>
        
      </div>
    );
  }
}

export default withRouter(Login);