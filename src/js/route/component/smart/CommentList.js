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
    //console.log("Props", this.props);
    console.log("CommentList ", {commentList});

    if (fetched === true) {
      console.log("Comment Fetched Condition");
      const CommentsList = commentList.data.map((comment, i) => <CommentListItem key={comment.commentId} {...comment}/>);
      return (
        <div>
          <h4>Comments</h4>
          <hr></hr>
          <div class="row">{CommentsList}</div>
        </div>
      );
    } else if (error) {
      console.log("Comment Error Condition");
      return (<ErrorIndicator/>);
    } else { //if ({fetching} === true)
      console.log("Comment Fetching Condition");
      return (<ProgressBar/>); //return (<h1>Fetching Blogs Loading Spinner</h1>);
    }
  }
}
