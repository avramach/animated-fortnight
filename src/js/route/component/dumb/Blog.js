import React from "react";

export default class Blog extends React.Component {
  render() {
    const  blog  = this.props;
    console.log("Rendering Blog" , this.props);
    console.log("Blog Object " , blog);
    return (
      <div class="col-md-4">
        <h2><a href="#">Title:{blog.title}</a></h2>
        <p class="lead">Author :<a href="index.php">{blog.author}</a></p>
        <p><span class="glyphicon glyphicon-time"></span>Posted on August 28, 2013 at 10:45 PM</p>
        <img class="img-responsive" src={blog.image} alt=""></img><hr></hr>
        <p>{blog.BlogMessage}</p>
        <a class="btn btn-primary" href="#">Read More<span class="glyphicon glyphicon-chevron-right"></span></a>
        <hr></hr>
      </div>
    );
  }
}
