import React from "react";
import {connect} from "react-redux"

import BlogList from "../smart/BlogList";
import UserListItem from "../dumb/UserListItem";

import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";
import {fetchSingleUser} from "../../../action/userActions"
import {resetUserStore} from "../../../action/userActions"

@connect((store) => {
  return {singleFetched: store.users.singleFetched, singleFetching: store.users.singleFetching, singleError: store.users.singleError, singleUser: store.users.singleUser, authdetails: store.authenticate.authenticatedUser};
})
export default class SingleUser extends React.Component {

  componentWillMount() {
    const token = this.props.authdetails.token;
    const userName = this.props.userName;
    //console.log("SingleUser UserName",this.props,userName)
    this.props.dispatch(resetUserStore())
    this.props.dispatch(fetchSingleUser(token, userName))
  }

  render() {
    //console.log("SingleUser Props", this.props);
    const {singleUser} = this.props;
    const {singleFetched} = this.props;
    const {singleFetching} = this.props;
    const {singleError} = this.props;

    if (singleFetched === true) {
      return (
        <div>
          <div>
            <hr></hr>
            <UserListItem user={singleUser}/>
          </div>
          <hr></hr>
          <div>
            <BlogList userName={this.props.userName}/>
          </div>
        </div>
      );
    } else if (singleError) {
      return (<ErrorIndicator/>);
    } else {
      return (<ProgressBar/>);
    }
  }

}
