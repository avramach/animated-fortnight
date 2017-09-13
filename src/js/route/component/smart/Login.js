import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router";

import {authenticateUser} from "../../../action/userActions"
import LoginForm from "../dumb/LoginForm";
import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";

@connect((store) => {
  return {authenticated : store.authenticate.authenticated, authenticating: store.authenticate.authenticating, authenticateError: store.authenticate.authenticateError, authenticatedUser: store.authenticate.authenticatedUser};
})

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        userName: "",
        password: "",
        authenticated: false
      }
    };
  }
  componentWillMount() {
    //this.props.dispatch(resetBlogStore())
  }

  onSubmit(fields) {
    this.setState(fields);
    console.log("Onsubmit Login : ", this.state, fields);
    this.props.dispatch(authenticateUser(fields))
  }
  navigate() {
    console.log("Navigate Called", this.props);
    this.props.history.pushState(null, navigateLink());
  }
  navigateLink() {
    return "userprofile/" + this.props.authenticatedUser.id;
  }

  render() {
    const {authenticated} = this.props;
    const {authenticating} = this.props;
    const {authenticateError} = this.props;

    console.log("Rendering Login", this.props);

    if (authenticating=== true) {
      console.log("Authenticating Condition");
      return (<ProgressBar/>);
    } else if (authenticateError) {
      console.log("Authenticate Error Condition");
      return (<ErrorIndicator/>);
    } else if (authenticated === true) {
      console.log("Authentication Complete");
      return (
        <div class="alert alert-dismissible alert-success">
          <strong>Authenticated !</strong>
          <Link to={this.navigateLink()} class="alert-link">Take me to the UserProfile</Link>.
        </div>
      );
    } else {
      return (
        <div><LoginForm onSubmit={this.onSubmit.bind(this)}/></div>
      );
    }
  }
}
