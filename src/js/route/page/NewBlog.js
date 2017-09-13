import React from "react";
import AddBlog from "../component/smart/AddBlog";

export default class NewBlog extends React.Component {
  render() {
    console.log("NewBlog Rendered");
    return (
      <div>
      <h1>New Blog </h1>
      <AddBlog />
      </div>
    );
  }
}
