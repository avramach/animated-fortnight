import React from "react";
import {connect} from "react-redux"

import BlogForm from "../dumb/BlogForm";
import {createBlog} from "../../../action/blogActions"
import {resetBlogStore} from "../../../action/blogActions"

@connect((store) => {
  return {posted: store.blogs.posted, posting: store.blogs.posting, posterror: store.blogs.posterror, postedBlog: store.blogs.postedBlog};
})

export default class AddBlog extends React.Component {

  constructor() {
    super();
    this.state = {
      fields: {
        title: "",
        image: "",
        categories: "",
        BlogMessage: "",
        author: ""
      }
    };
  }
  componentWillMount() {
    this.props.dispatch(resetBlogStore())
  }

  onSubmit(fields) {
    this.setState(fields);
    console.log("Onsubmit AddBlog: ", this.state, fields);
    fields.author = "dvalente2";
    this.props.dispatch(createBlog(fields))
  }

  render() {
    const containerStyle = {
      width: "45%"
    };
    const {posted} = this.props;
    const {posting} = this.props;
    const {posterror} = this.props;

    console.log("Rendering AddBlog ",this.props);

    if (posting === true) {
      console.log("Posting Condition");
      return (
        <div class="progress progress-striped active">
          <div class="progress-bar" style={containerStyle}></div>
        </div>
      ); //return (<h1>Fetching Blogs Loading Spinner</h1>);
    } else if (!{
      posterror
    }){
      console.log("Error Condition");
      return (
        <div class="alert alert-dismissible alert-danger">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>Oh snap!</strong>
          <a href="#" class="alert-link">Something Went Wrong,Retry Again</a>
        </div>
      );
    } else if (posted === true) {
      console.log("Posted Complete");
      return (
        <h1>Blog Post Complete</h1>
      );
    } else {
      return (
        <div>
          <BlogForm onSubmit={this.onSubmit.bind(this)}/>
        </div>
      );
    }
  }
}
