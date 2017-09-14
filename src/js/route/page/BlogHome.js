import React from "react";
import BlogList from "../component/smart/BlogList";

export default class BlogHome extends React.Component {
  render() {
    ////console.log("BlogHome Rendered");
    return (
      <div>
      <h1>BlogHome</h1>
      <BlogList />
      </div>
    );
  }
}
