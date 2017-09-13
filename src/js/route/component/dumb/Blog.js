import React from "react";

export default class Blog extends React.Component {
  render() {
    const  {blog}  = this.props;
    //console.log("Rendering Blog" , this.props);
    console.log("Blog Object " , blog,blog.title,blog.author);
    return (
          <div>
          <h1>{blog.title}</h1>
          <p class="lead">
          Author: <a href="#">{blog.author}</a>
          </p>
          <hr></hr>
          <p>
            <span class="glyphicon glyphicon-time"></span> Posted on {blog.createDate}</p>
          <hr></hr>
          <img class="img-responsive" src={blog.image} alt=""></img>
          <hr></hr>
          <p class="lead">{blog.BlogMessage}</p>
          </div>
    );
  }
}
