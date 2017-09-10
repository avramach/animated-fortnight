import React from "react";
import {connect} from "react-redux"

import {fetchBlogs} from "../../../action/blogActions"
import Blog from "../dumb/Blog";

@connect((store) => {
  return {fetched: store.blogs.fetched, fetching: store.blogs.fetching, error: store.blogs.error, blogList: store.blogs.blogList};
})

export default class BlogList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchBlogs())
  }

  render() {
    const {blogList} = this.props;
    const {fetched} = this.props;
    const {fetching} = this.props;
    const {error} = this.props;
    console.log("Props", this.props);
    console.log("BlogList ", {blogList});
    console.log("Rendering BlogList ", fetched);

    if (fetched === true) {
      console.error("Fetched True");
      const BlogsList =  blogList.data.map((blog, i) => <Blog key={blog.id} {...blog}/>);

      return (
        <div>
          <div class="row">{BlogsList}</div>
        </div>
      );
    } else if (!{error}) {
      console.error("Error Condition");
      return (
        <div class="alert alert-dismissible alert-danger">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>Oh snap!</strong>
          <a href="#" class="alert-link">Something Went Wrong,Retry Again</a>
        </div>
      );
    } else { //if ({fetching} === true)
      console.log("Fetching Condition");
      return (<h1>Cmon Comn</h1>);
    }
  }
}
