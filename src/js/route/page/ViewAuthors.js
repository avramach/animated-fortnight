import React from "react";
import UserList from "../component/smart/UserList";

export default class ViewAuthors extends React.Component {
  render() {
    ////console.log("ViewAuthors Rendered");
    return (
      <div>
      <h1>View Authors</h1>
      <UserList />
      </div>
//<!--Blog/USer/CommentList-->
    );
  }
}
