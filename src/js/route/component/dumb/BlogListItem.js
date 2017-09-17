import React from "react";
import {Link} from "react-router";

export default class BlogListItem extends React.Component {
  navigate(){
    return "viewblog/" +this.props.blogId;
  }
  render() {
    const  {blog}  = this.props;
    const  {searchView} = this.props;

    var d = new Date(0);
    d.setUTCSeconds(blog.createDate);
    let blogDate = d.toString();
    if(searchView){
    return (
        <section class="col-xs-12 col-sm-6 col-md-12">
          <article class="search-result row">
            <div class="col-xs-12 col-sm-12 col-md-3">
              <img class="thumbnail" src={blog.image} alt="" height="180" width="150"></img><hr></hr>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-7 excerpet">
            <h3><Link to={this.navigate()}>{blog.title}</Link></h3>
            <p>{blog.blogMessage}</p>
            </div>
          </article>
        </section>
    );
  }
  else{
    return (
      <div class="col-md-4">
        <h2><Link to={this.navigate()}>{blog.title}</Link></h2>
        <p class="lead">Author :<Link to="userprofile/{blog.author}">{blog.author}</Link></p>
        <p><span class="glyphicon glyphicon-time"></span>{blogDate}</p>
        <img class="img-responsive" src={blog.image} alt=" "height="320" width="200"></img><hr></hr>
        <p>{blog.blogMessage}</p>
        <p>Category: {blog.category}</p>
        <Link class="btn btn-primary" to={this.navigate()}>Read More<span class="glyphicon glyphicon-chevron-right"></span></Link>
        <hr></hr>
      </div>
    );
  }
  }
}
