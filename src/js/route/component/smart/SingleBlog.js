import React from "react";
import {connect} from "react-redux"

import Blog from "../dumb/Blog";
import {fetchSingleBlog} from "../../../action/blogActions"
import AddComment from "../smart/AddComment";
import CommentList from "../smart/CommentList";

@connect((store) => {
  return {singleFetched: store.blogs.singleFetched, singleFetching: store.blogs.singleFetching, singleError: store.blogs.singleError, singleBlog: store.blogs.singleBlog };
})
export default class SingleBlog extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchSingleBlog(this.props.blogId))
  }

  render() {
    const containerStyle = {
      width: "45%"
    };
    //console.error("SingleBlog Props",this.props);
    const blogId = this.props.blogId;
    const {singleBlog} = this.props;
    const {singleFetched} = this.props;
    const {singleFetching} = this.props;
    const {singleError} = this.props;
    //console.log("Props", this.props);
    console.log("blogItem", blogId, {singleBlog});

    if (singleFetched === true) {
      console.log("Single Blog item Fetched Condition");
      return (
        <div>
          <div class="row">
            <div class="col-lg-8">
              <Blog blog={singleBlog.data}/>
              <AddComment blogId={blogId}/>
              <CommentList blogId={blogId}/>
            </div>
          </div>

        </div>
      );
    } else if (!{
      singleError
    }) {
      console.log("Single Blog Error Condition");
      return (
        <div class="alert alert-dismissible alert-danger">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>Oh snap!</strong>
          <a href="#" class="alert-link">Something Went Wrong,Retry Again</a>
        </div>
      );
    } else { //if ({singleFetching} === true)
      console.log("Single Blog Fetching Condition");
      return (
        <div class="progress progress-striped active">
          <div class="progress-bar" style={containerStyle}></div>
        </div>
      ); //return (<h1>Fetching Blogs Loading Spinner</h1>);
    }
  }

}
