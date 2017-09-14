import React from "react";
import {connect} from "react-redux"

import BlogListItem from "../dumb/BlogListItem";
import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";
import {fetchBlogs} from "../../../action/blogActions"
import {resetBlogStore} from "../../../action/blogActions"

@connect((store) => {
  return {fetched: store.blogs.fetched, fetching: store.blogs.fetching, error: store.blogs.error, blogList: store.blogs.blogList};
})

export default class BlogList extends React.Component {
  componentWillMount() {
    this.props.dispatch(resetBlogStore())
    if (this.props.userName === undefined) {
      this.props.dispatch(fetchBlogs())
    } else {
      this.props.dispatch(fetchBlogs(this.props.userName))
    }
  }

  render() {
    const {blogList} = this.props;
    const {fetched} = this.props;
    const {fetching} = this.props;
    const {error} = this.props;
    //////console.log("Props", this.props);

    if (fetched === true) {
      const BlogsList = blogList.map((blog, i) => <BlogListItem key={blog.blogId} {...blog}/>);

      return (
        <div>
          <div class="row">{BlogsList}</div>
        </div>
      );
    } else if (error) {
      return (<ErrorIndicator/>);
    } else {
      return (<ProgressBar/>);
    }
  }
}
