import React from "react";
import UserProfile from "../component/smart/UserProfile";
import SingleUser from "../component/smart/SingleUser";

export default class ViewProfile extends React.Component {
  render() {
    const {userName} = this.props.params;
    //console.log("ViewProfile Props",this.props);
    if (userName === undefined) {
      return (
        <div>
          <h1>Profile:{userName}</h1>
          <UserProfile history={this.props.history}/>
        </div>
      );
    } else {
      return (
        <div>
          <h1>ViewProfile Author : {userName}</h1>
          <SingleUser userName={userName} history={this.props.history}/>
        </div>
      );
    }
  }
}
