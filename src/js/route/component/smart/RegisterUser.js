import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router";

import {registerUser} from "../../../action/userActions"
import {resetUserStore} from "../../../action/userActions"
import RegisterForm from "../dumb/RegisterForm"
import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";
import OverlayMessage from "../layout/OverlayMessage";

@connect((store) => {
  return {registered: store.users.registered, registering: store.users.registering, registerError: store.users.registerError, registeredUser: store.users.registeredUser};
})

export default class RegisterUser extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      image: "",
      emailId: ""
      }
    };
    this.navigateClicked = this.navigateClicked.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(resetUserStore())
  }

  onSubmit(fields) {
    this.setState(fields);
    //console.log("Onsubmit RegisterUser: ", this.state, fields);
    this.props.dispatch(registerUser(fields))
  }
  navigateClicked() {
    ////console.log("Navigate Called", this.props);
    this.props.history.pushState(null, navigateLink());
  }
  navigateLink() {
    return "signin/login";
  }

  render() {
    const {registered} = this.props;
    const {registering} = this.props;
    const {registerError} = this.props;

    ////console.log("Rendering RegisterUser", this.props);

    if (registering === true) {
      ////console.log("registering Condition");
      return (<ProgressBar/>);
    } else if (registerError) {
      ////console.log("Register Error Condition");
      return (<ErrorIndicator/>);
    } else if (registered === true) {
      ////console.log("Posted Complete");
      return (
        <OverlayMessage message="User Succesfully Created" navigateClicked={this.navigateClicked} id="login" title="LOGIN"/>
      );
    } else {
      return (
        <div><RegisterForm onSubmit={this.onSubmit.bind(this)}/></div>
      );
    }
  }
}
