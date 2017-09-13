import React from "react";
import {connect} from "react-redux"

import {fetchUsers} from "../../../action/userActions"
import UserListItem from "../dumb/UserListItem";

@connect((store) => {
  return {fetched: store.users.fetched, fetching: store.users.fetching, error: store.users.error, userList: store.users.userList};
})

export default class UserList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUsers())
  }

  render() {
    const containerStyle = {
      width: "45%"
    };
    const {userList} = this.props;
    const {fetched} = this.props;
    const {fetching} = this.props;
    const {error} = this.props;
    //console.log("Props", this.props);
    console.log("UserList", {userList});

    if (fetched === true) {
      console.log("UserList Fetched Condition");
      const UsersList = userList.data.map((user, i) => <UserListItem key={user.id} {...user}/>);
      return (
        <div>
          <div class="row">{UsersList}</div>
        </div>
      );
    } else if (!{
      error
    }) {
      console.log("Users Error Condition");
      return (
        <div class="alert alert-dismissible alert-danger">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>Oh snap!</strong>
          <a href="#" class="alert-link">Something Went Wrong,Retry Again</a>
        </div>
      );
    } else { //if ({fetching} === true)
      console.log("Users Fetching Condition");
      return (
        <div class="progress progress-striped active">
          <div class="progress-bar" style={containerStyle}></div>
        </div>
      ); //return (<h1>Fetching Blogs Loading Spinner</h1>);
    }
  }
}
