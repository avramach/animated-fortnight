import React from "react";
import {connect} from "react-redux"

import {fetchUsers} from "../../../action/userActions"
import UserListItem from "../dumb/UserListItem";
import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";

@connect((store) => {
  return {
    fetched: store.users.fetched, fetching: store.users.fetching, error: store.users.error, userList: store.users.userList
    ,authdetails: store.authenticate.authenticatedUser
  };
})

export default class UserList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUsers(this.props.authdetails.token))
  }

  render() {
    const {userList} = this.props;
    const {fetched} = this.props;
    const {fetching} = this.props;
    const {error} = this.props;
    //////console.log("Props", this.props);
    if (fetched === true) {
      const UsersList = userList.map((user, i) => <UserListItem key={i} user={user}/>);
      return (
        <div>
          <div class="row">{UsersList}</div>
        </div>
      );
    } else if (error) {
      return (<ErrorIndicator/>);
    } else {
      return (<ProgressBar/>);
    }
  }
}
