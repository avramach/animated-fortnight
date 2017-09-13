import React from "react";
import SingleBlog from "../component/smart/SingleBlog";

export default class ViewBlog extends React.Component {
  render() {
    //console.log("ViewBlog Rendered",this.props);
    console.log("ViewBlog Params",this.props.params);
    return (
      <div>
      <h1>ViewBlog {this.props.params.blogId}</h1>
      <SingleBlog blogId={this.props.params.blogId}/>
      </div>
    );
  }
}
