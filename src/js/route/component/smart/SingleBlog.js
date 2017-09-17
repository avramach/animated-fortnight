import React from "react";
import {connect} from "react-redux"

import Blog from "../dumb/Blog";
import AddComment from "../smart/AddComment";
import CommentList from "../smart/CommentList";
import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";
import {fetchSingleBlog} from "../../../action/blogActions"
import {resetBlogStore} from "../../../action/blogActions"

@connect((store) => {
  return {singleFetched: store.blogs.singleFetched, singleFetching: store.blogs.singleFetching, singleError: store.blogs.singleError, singleBlog: store.blogs.singleBlog};
})
export default class SingleBlog extends React.Component {

  componentWillMount() {
    this.props.dispatch(resetBlogStore())
    this.props.dispatch(fetchSingleBlog(this.props.blogId))
  }

  navigate(link) {
    this.props.history.pushState(null, link);
  }

  render() {
    const blogId = this.props.blogId;
    const {singleBlog} = this.props;
    const {singleFetched} = this.props;
    const {singleFetching} = this.props;
    const {singleError} = this.props;

    if (singleFetched === true) {
      return (
        <div>
          <div class="row">
            <div class="col-lg-8">
              <Blog blog={singleBlog}/>
              <AddComment blogId={blogId} navigate = {this.navigate.bind(this)}/>
              <CommentList blogId={blogId}/>
            </div>
          </div>
        </div>
      );
    } else if (singleError) {
      return (<ErrorIndicator/>);
    } else {
      return (<ProgressBar/>);
    }
  }

}
