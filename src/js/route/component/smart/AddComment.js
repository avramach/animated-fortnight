import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router";

import CommentForm from "../dumb/CommentForm";
import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";
import {createComment} from "../../../action/commentActions"
import {resetCommentStore} from "../../../action/commentActions"

@connect((store) => {
  return {posted: store.comments.posted, posting: store.comments.posting, posterror: store.comments.posterror, postedComment: store.comments.postedComment};
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
  }
  componentWillMount() {
    this.props.dispatch(resetCommentStore())
  }

  onSubmit(fields) {
    this.setState(fields);
    console.log("Onsubmit AddComment: ", this.state, fields);
    fields.author = "dvalente2";
    fields.blogId = this.props.blogId;
    this.props.dispatch(createComment(fields))
  }

  navigate() {
    console.log("Navigate Called", this.props);
    this.props.history.pushState(null, navigateLink());
  }
  navigateLink() {
    return "viewblog/" + this.props.blogId;
  }

  render() {
    const containerStyle = {
      width: "45%"
    };
    const {posted} = this.props;
    const {posting} = this.props;
    const {posterror} = this.props;
    const {blogId} = this.props;

    console.log("Rendering AddComment ", this.props, blogId);

    if (posting === true) {
      console.log("Posting Condition");
      return (<ProgressBar/>); //return (<h1>Fetching Blogs Loading Spinner</h1>);
    } else if (posterror) {
      console.log("AddComment Error Condition");
      return (<ErrorIndicator/>);
    } else if (posted === true) {
      console.log("Posted Complete");
      return (
        <div class="alert alert-dismissible alert-success">
          <strong>Comment Succesfully Created !</strong>
          <Link to={this.navigateLink()} class="alert-link">Back to Current Blog</Link>.
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
