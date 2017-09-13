import React from "react";

export default class Register extends React.Component {
  render() {
    console.log("Register Rendered");
    return (
      <div>
        <h1>Login</h1>
        <div class="wrapper">
          <form class="form-signin">
            <h2 class="form-signin-heading">Please login</h2>
            <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus=""/>
            <input type="password" class="form-control" name="password" placeholder="Password" required=""/>
            <label class="checkbox">
              <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe">
                Remember me</input>
            </label>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
          </form>
        </div>
      </div>
    //<!-- Signup/Login -->
    );
  }
}
