import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router";

import {createBlog} from "../../../action/blogActions"
import {resetBlogStore} from "../../../action/blogActions"
import BlogForm from "../dumb/BlogForm";
import ErrorIndicator from "../layout/ErrorIndicator";
import OverlayMessage from "../layout/OverlayMessage";
import ProgressBar from "../layout/ProgressBar";

@connect((store) => {
  return {
    posted: store.blogs.posted, posting: store.blogs.posting, posterror: store.blogs.posterror, postedBlog: store.blogs.postedBlog, authdetails: store.authenticate.authenticatedUser
  };
})

export default class AddBlog extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        title: "",
        image: "",
        category: "",
        blogMessage: "",
        author: ""
      }
    };
    this.navigateClicked = this.navigateClicked.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(resetBlogStore())
  }

  onSubmit(fields) {
    this.setState(fields);
    const token = this.props.authdetails.token;
    fields.author = this.props.authdetails.userName;
    this.props.dispatch(createBlog(token, fields))
  }

  navigateClicked = e => {
    e.preventDefault();
    this.props.history.pushState(null, this.navigateLink(e.target.id));
  }

  navigateLink(id) {
    if (id == "ok") {
      return "viewblog/" + this.props.postedBlog.blogId;
    }
  }

  render() {
    const {posted} = this.props;
    const {posting} = this.props;
    const {posterror} = this.props;

    if (posting === true) {
      return (<ProgressBar/>);
    } else if (posterror) {
      return (<ErrorIndicator/>);
    } else if (posted === true) {
      return (<OverlayMessage message="New Blog Created" navigateClicked={this.navigateClicked} id="ok" title="OK"/>);
    } else {
      return (
        <div><BlogForm onSubmit={this.onSubmit.bind(this)}/></div>
      );
    }
  }
}
