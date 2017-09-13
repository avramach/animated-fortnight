import React from "react";

export default class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      image: "",
      emailId: ""
    };
  }
  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("onsubmit of RegisterForm", this.state)
    this.props.onSubmit(this.state);
  }

  render() {
    console.log("RegisterForm Rendered");
    return (
      <div>
        <div class="wrapper">
          <form class="form-signin">
            <h2 class="form-signin-heading">Create a New User</h2>
            <input type="text" class="form-control" id="firstName" placeholder="First Name" required="" autofocus="" onChange={e => this.change(e)}/>
            <input type="text" class="form-control" id="lastName" placeholder="LastName" required="" autofocus="" onChange={e => this.change(e)}/>
            <input type="text" class="form-control" id="emailId" placeholder="Email Address" required="" autofocus="" onChange={e => this.change(e)} />
            <input type="text" class="form-control" id="image" placeholder="Image" required="" autofocus="" onChange={e => this.change(e)}/>
            <input type="text" class="form-control" id="userName" placeholder="UserName" required="" autofocus="" onChange={e => this.change(e)}/>
            <input type="password" class="form-control" id="password" placeholder="Password" required="" onChange={e => this.change(e)}/>
            <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={e => this.onSubmit(e)}>Register</button>
          </form>
        </div>
      </div>
    );
  }
}
