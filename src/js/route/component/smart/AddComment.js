import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router";

import CommentForm from "../dumb/CommentForm";
import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";
import OverlayMessage from "../layout/OverlayMessage";
import {createComment} from "../../../action/commentActions"
import {resetCommentStore} from "../../../action/commentActions"
import {fetchComments} from "../../../action/commentActions"

@connect((store) => {
  return {posted: store.comments.posted, posting: store.comments.posting, posterror: store.comments.posterror, postedComment: store.comments.postedComment, authdetails: store.authenticate.authenticatedUser};
})

export default class AddBlog extends React.Component {

  constructor() {
    super();
    this.state = {
      fields: {
        commentText: "",
        author: "",
        blogId: ""
      }
    };
    this.navigateClicked = this.navigateClicked.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(resetCommentStore())
  }

  onSubmit(fields) {
    this.setState(fields);
    const token = this.props.authdetails.token;
    fields.author = this.props.authdetails.userName;
    fields.blogId = this.props.blogId;
    this.props.dispatch(createComment(token, fields.blogId, fields))
  }

  navigateClicked = e => {
    e.preventDefault();
    var link ="";
    if (e.target.id == "ok") {
      link = "viewblog/" + this.props.blogId;
    }
    this.props.dispatch(resetCommentStore())
    this.props.dispatch(fetchComments(this.props.blogId))
    //this.props.navigate(link);
  }

  render() {
    const {posted} = this.props;
    const {posting} = this.props;
    const {posterror} = this.props;
    const {blogId} = this.props;

    if (posting === true) {
      return (<ProgressBar/>);
    } else if (posterror) {
      return (<ErrorIndicator/>);
    } else if (posted === true) {
      return (
        <div>
        <CommentForm onSubmit={this.onSubmit.bind(this)}/>
        <OverlayMessage message="New Comment Created" navigateClicked={this.navigateClicked} id="ok" title="OK"/>
        </div>
      );
    } else {
      return (
        <div>
          <CommentForm onSubmit={this.onSubmit.bind(this)}/>
        </div>
      );
    }
  }
}
