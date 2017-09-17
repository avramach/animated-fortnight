import React from "react";
import {connect} from "react-redux"

import BlogListItem from "../dumb/BlogListItem";
import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";
import {fetchBlogs} from "../../../action/blogActions"
import {fetchBlogsByUserName} from "../../../action/blogActions"
import {fetchBlogsByCategory} from "../../../action/blogActions"
import {resetBlogStore} from "../../../action/blogActions"

@connect((store) => {
  return {fetched: store.blogs.fetched, fetching: store.blogs.fetching, error: store.blogs.error, blogList: store.blogs.blogList};
})

export default class BlogList extends React.Component {

  componentWillMount() {
    this.props.dispatch(resetBlogStore())
    this.fireBlogActions(this.props.userName, this.props.category);
  }

  componentWillUpdate(nextProps, nextState) {
    if ((this.props.category != nextProps.category) || (this.props.userName != nextProps.userName)) {
      this.props.dispatch(resetBlogStore())
      //console.error("Component Will update",nextProps.category,this.props.category);
      this.fireBlogActions(nextProps.userName, nextProps.category);
    }
  }

  fireBlogActions(userName, category) {
    if (userName === undefined && category === undefined) {
      this.props.dispatch(fetchBlogs())
    } else if (category === undefined) {
      this.props.dispatch(fetchBlogsByUserName(userName))
    } else {
      this.props.dispatch(fetchBlogsByCategory(category))
    }
  }

  render() {
    const {blogList} = this.props;
    const {fetched} = this.props;
    const {fetching} = this.props;
    const {error} = this.props;
    const {resetComplete} = this.props;

    if (fetched === true) {
      if (blogList.length) {
        const BlogsList = blogList.map((blog, i) => <BlogListItem key={blog.blogId} blog={blog}/>);
        return (
          <div>
            <div class="row">{BlogsList}</div>
          </div>
        );
      } else {
        return (
          <h1>No blogs Found Author:{this.props.userName}/Category:{this.props.category}</h1>
        );
      }
    } else if (error) {
      return (<ErrorIndicator/>);
    } else {
      return (<ProgressBar/>);
    }
  }
}
