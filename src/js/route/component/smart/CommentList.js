import React from "react";
import {connect} from "react-redux"

import {fetchComments} from "../../../action/commentActions"
import CommentListItem from "../dumb/CommentListItem";

@connect((store) => {
  return {fetched: store.comments.fetched, fetching: store.comments.fetching, error: store.comments.error, commentList: store.comments.commentList};
})

export default class CommentList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchComments(this.props.blogId))
  }

  render() {
    const containerStyle = {
      width: "45%"
    };
    const blogId = this.props.blogId;
    const {commentList} = this.props;
    const {fetched} = this.props;
    const {fetching} = this.props;
    const {error} = this.props;
    //console.log("Props", this.props);
    console.log("CommentList ", {commentList});

    if (fetched === true) {
      console.log("Comment Fetched Condition");
      const CommentsList = commentList.data.map((comment , i) => <CommentListItem key={comment.id} {...comment}/>);
      return (
        <div>
          <div class="row">{CommentsList}</div>
        </div>
      );
    } else if (!{
      error
    }) {
      console.log("Comment Error Condition");
      return (
        <div class="alert alert-dismissible alert-danger">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>Oh snap!</strong>
          <a href="#" class="alert-link">Something Went Wrong,Retry Again</a>
        </div>
      );
    } else { //if ({fetching} === true)
      console.log("Comment Fetching Condition");
      return (
        <div class="progress progress-striped active">
          <div class="progress-bar" style={containerStyle}></div>
        </div>
      ); //return (<h1>Fetching Blogs Loading Spinner</h1>);
    }
  }
}
