import React from "react";
import {connect} from "react-redux"

import SingleUser from "../smart/SingleUser";
import OverlayMessage from "../layout/OverlayMessage";
import ErrorIndicator from "../layout/ErrorIndicator";

@connect((store) => {
  return {authenticated: store.authenticate.authenticated, authenticateError: store.authenticate.authenticateError, authenticatedUser: store.authenticate.authenticatedUser};
})

export default class UserProfile extends React.Component {
  constructor() {
    super();
    this.navigateClicked = this.navigateClicked.bind(this);
  }
  navigateClicked() {
    this.props.history.pushState(null, this.navigateLink());
  }
  navigateLink() {
    return "signin/login";
  }
  render() {
    const {authenticated} = this.props;
    const {authenticatedUser} = this.props;
    //console.log("UserProfile UserName",authenticatedUser);
    if (authenticated) {
      return (
        <div>
          <SingleUser userName={this.props.authenticatedUser.userName}/>
        </div>
      );
    } else {
      return (
        <div>
          <ErrorIndicator/>
          <OverlayMessage message="Please Log In" navigateClicked={this.navigateClicked} id="ok" title="OK"/>
        </div>
      );
    }
  }
}
