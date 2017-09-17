import React from "react";
import {connect} from "react-redux"

import {fetchComments} from "../../../action/commentActions"
import {resetCommentStore} from "../../../action/commentActions"
import CommentListItem from "../dumb/CommentListItem";
import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";

@connect((store) => {
  return {fetched: store.comments.fetched, fetching: store.comments.fetching, error: store.comments.error, commentList: store.comments.commentList};
})

export default class CommentList extends React.Component {
  componentWillMount() {
    this.props.dispatch(resetCommentStore())
    this.props.dispatch(fetchComments(this.props.blogId))
  }

  render() {
    const blogId = this.props.blogId;
    const {commentList} = this.props;
    const {fetched} = this.props;
    const {fetching} = this.props;
    const {error} = this.props;

    if (fetched === true) {
      const CommentsList = commentList.map((comment, i) => <CommentListItem key={comment.commentId} {...comment}/>);
      return (
        <div>
          <h4>Comments</h4>
          <hr></hr>
          <div class="row">{CommentsList}</div>
        </div>
      );
    } else if (error) {
      return (<ErrorIndicator/>);
    } else {
      return (<ProgressBar/>);
    }
  }
}
