import React from "react";
import {connect} from "react-redux"

import {fetchBlogs} from "../../../action/blogActions"
import BlogListItem from "../dumb/BlogListItem";

@connect((store) => {
  return {fetched: store.blogs.fetched, fetching: store.blogs.fetching, error: store.blogs.error, blogList: store.blogs.blogList};
})

export default class BlogList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchBlogs())
  }

  render() {
    const containerStyle = {
      width: "45%"
    };
    const {blogList} = this.props;
    const {fetched} = this.props;
    const {fetching} = this.props;
    const {error} = this.props;
    //console.log("Props", this.props);
    console.log("BlogList ", {blogList});
    //console.log("Rendering BlogList ", fetched);

    if (fetched === true) {
      //console.log("Fetched True");
      const BlogsList = blogList.data.map((blog, i) => <BlogListItem key={blog.id} {...blog}/>);
      console.log("mapped",BlogsList);

      return (
        <div>
          <div class="row">{BlogsList}</div>
        </div>
      );
    } else if (!{
      error
    }) {
      console.log("Error Condition");
      return (
        <div class="alert alert-dismissible alert-danger">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>Oh snap!</strong>
          <a href="#" class="alert-link">Something Went Wrong,Retry Again</a>
        </div>
      );
    } else { //if ({fetching} === true)
      console.log("Fetching Condition");
      return (
        <div class="progress progress-striped active">
          <div class="progress-bar" style={containerStyle}></div>
        </div>
      ); //return (<h1>Fetching Blogs Loading Spinner</h1>);
    }
  }
}
