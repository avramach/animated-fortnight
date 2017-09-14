import React from "react";

export default class UserListItem extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <div>
        <div class="col-lg-4 col-sm-6 text-center mb-4">
          <img class="rounded-circle img-fluid d-block mx-auto" src={user.image} alt=""></img>
          <h3>{user.firstName} {user.lastName}
            <small>{user.userName}</small>
          </h3>
          <h3><small>{user.emailId}</small></h3>
        </div>
      </div>
    );
  }
}
