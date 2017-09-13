import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router";

import {createBlog} from "../../../action/blogActions"
import {resetBlogStore} from "../../../action/blogActions"
import BlogForm from "../dumb/BlogForm";
import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";

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
  navigate() {
    console.log("Navigate Called", this.props);
    this.props.history.pushState(null, navigateLink());
  }
  navigateLink() {
    return "viewblog/" + this.props.postedBlog.id;
  }

  render() {
    const {posted} = this.props;
    const {posting} = this.props;
    const {posterror} = this.props;

    console.log("Rendering AddBlog ", this.props);

    if (posting === true) {
      console.log("Posting Condition");
      return (<ProgressBar/>);
    } else if (posterror) {
      console.log("Error Condition");
      return (<ErrorIndicator/>);
    } else if (posted === true) {
      console.log("Posted Complete");
      return (
        <div class="alert alert-dismissible alert-success">
          <strong>Blog Succesfully Created !</strong>
          <Link to={this.navigateLink()} class="alert-link">Take me to the Blog</Link>.
        </div>
      );
    } else {
      return (
        <div><BlogForm onSubmit={this.onSubmit.bind(this)}/></div>
      );
    }
  }
}
