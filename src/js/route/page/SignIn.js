import React from "react";
import Login from "../component/smart/Login";
import RegisterUser from "../component/smart/RegisterUser";
import { Link } from "react-router";

export default class SignIn extends React.Component {
  navigate(link) {
    console.error("SIGNIN NAVIGATION",link);
    this.props.history.pushState(null, link);
  }
  render() {
    const action = this.props.params.action;
    console.log("Signin Rendered ", this.props,action);

    if (action == "register") {
      return (
        <div>
          <h1>Register</h1>
          <RegisterUser navigate={this.navigate.bind(this)}/>
          <Link to="signin/login"><h4>Already Registered?: Login</h4></Link>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Login</h1>
          <Login navigate={this.navigate.bind(this)}/>
          <Link to="signin/register"><h4>Create new account: Register</h4></Link>
        </div>
      );
    }
  }
}
