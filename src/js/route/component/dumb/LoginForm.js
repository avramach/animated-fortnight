import React from "react";

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: ""
    };
  }
  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    ////console.log("onsubmit of LoginForm", this.state)
    this.props.onSubmit(this.state);
  }

  render() {
    ////console.log("LoginForm Rendered");
    return (
        <div class="wrapper">
          <form class="form-signin">
            <h2 class="form-signin-heading">Please login</h2>
            <input type="text" class="form-control" id="userName" placeholder="Username" required="" autofocus="" onChange={e => this.change(e)}/>
            <input type="password" class="form-control" id="password" placeholder="Password" required="" onChange={e => this.change(e)}/>
            <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={e => this.onSubmit(e)}>Login</button>
          </form>
        </div>
    );
  }
}
