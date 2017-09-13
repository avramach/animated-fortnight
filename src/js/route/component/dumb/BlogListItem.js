import React from "react";
import {Link} from "react-router";

export default class BlogListItem extends React.Component {
  navigate(){
    //return "viewblog/" +this.props.blogId;
    return "viewblog/" +this.props.id;
  }
  render() {
    const  blog  = this.props;
    //console.error("Rendering Blog" , this.props);
    //console.error("Blog Object " , blog);
    //console.error("Blog Id" , blog.blogId ,blog.id , blog.title);
    return (
      <div class="col-md-4">
        <h2><Link to={this.navigate()}>Title:{blog.title}</Link></h2>
        <p class="lead">Author :<Link to="userprofile/{blog.author}">{blog.author}</Link></p>
        <p><span class="glyphicon glyphicon-time"></span>Posted on August 28, 2013 at 10:45 PM</p>
        <img class="img-responsive" src={blog.image} alt=""></img><hr></hr>
        <p>{blog.BlogMessage}</p>
        <Link class="btn btn-primary" to={this.navigate()}>Read More<span class="glyphicon glyphicon-chevron-right"></span></Link>
        <hr></hr>
      </div>
    );
  }
}
