import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router";

import {authenticateUser} from "../../../action/authenticateActions"
import {resetAuthenticateStore} from "../../../action/authenticateActions"
import LoginForm from "../dumb/LoginForm";
import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";
import OverlayMessage from "../layout/OverlayMessage";

@connect((store) => {
  return {authenticated: store.authenticate.authenticated, authenticating: store.authenticate.authenticating, authenticateError: store.authenticate.authenticateError, authenticatedUser: store.authenticate.authenticatedUser};
})

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        userName: "",
        password: ""
      }
    };
    this.navigateClicked = this.navigateClicked.bind(this);
  }
  logOut() {
    //console.log("Loggin Out", this.state,this.props)
    this.props.dispatch(resetAuthenticateStore());
  }

  onSubmit(fields) {
    this.setState(fields);
    ////console.log("Onsubmit Login : ", this.state, fields);
    this.props.dispatch(authenticateUser(fields))
  }
  navigate(action) {
    //console.log("Navigate Called", this.props, action);
    var link = "";
    if (action == "logout") {
      link = "signin/login";
    } else {
      //link = "userprofile" + this.props.authenticatedUser.userName;
      link = "userprofile"; 
    }
    this.props.navigate(link);
  }
  navigateClicked= e => {
    e.preventDefault();
    ////console.log("navigateClicked of Login", this.state,this.props,e.target.id)
    if(e.target.id == "logout"){
    this.logOut();
    }
    this.navigate(e.target.id);
  }

  render() {
    const {authenticated} = this.props;
    const {authenticating} = this.props;
    const {authenticateError} = this.props;
    const {authenticatedUser} = this.props;

    ////console.log("Rendering Login", this.props);

    if (authenticating === true) {
      ////console.log("Authenticating Condition");
      return (<ProgressBar/>);
    } else if (authenticateError) {
      ////console.log("Authenticate Error Condition");
      return (<ErrorIndicator/>);
    } else if (authenticated === true) {
      ////console.log("Authentication Complete");
      return (
        <div>
        <OverlayMessage message="Log in Success, View Profile " navigateClicked={this.navigateClicked} id="profile" title="Profile"/>
        <OverlayMessage message="Logout" navigateClicked={this.navigateClicked} id="logout" title="Logout "/>
        </div>
      );
    } else {
      return (
        <div><LoginForm onSubmit={this.onSubmit.bind(this)}/></div>
      );
    }
  }
}
