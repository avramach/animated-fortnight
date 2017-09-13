import React from "react";

export default class UserListItem extends React.Component {
  render() {
    const user = this.props;
    //console.log("Rendering Blog" , this.props);
    console.log("User Object ", this.props,user.emailId);
    return (
      <div>
        <div class="col-lg-4 col-sm-6 text-center mb-4">
          <img class="rounded-circle img-fluid d-block mx-auto" src={user.image} alt=""></img>
          <h3>{user.firstName} {user.lastName}
            <small>{user.userName}</small>
          </h3>
          <h3><small>{user.emailId}</small></h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>
      </div>
    );
  }
}
