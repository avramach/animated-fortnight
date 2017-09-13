import React from "react";
import {connect} from "react-redux"

import {createComment} from "../../../action/commentActions"
import CommentForm from "../dumb/CommentForm";
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
    fields.blogId= this.props.blogId;
    this.props.dispatch(createComment(fields))
  }

  navigate(){
  console.error("Navigate Called",this.props);
  this.props.history.pushState(null,navigateLink());
  }
  navigateLink(){
    return "viewblog/" +this.props.blogId;
  }

  render() {
    const containerStyle = {
      width: "45%"
    };
    const {posted} = this.props;
    const {posting} = this.props;
    const {posterror} = this.props;
    const {blogId} = this.props;

    console.error("Rendering AddComment ",this.props,blogId);

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
          <button type="button" class="close" data-dismiss="alert" >&times;</button>
          <strong>Oh snap!</strong>
          <a href="#" class="alert-link">Something Went Wrong,Retry Again</a>
        </div>
      );
    } else if (posted === true) {
      console.log("Posted Complete");
      return (
        <div class="alert alert-dismissible alert-success">
  <button type="button" data-dismiss="alert" onClick=this.navigate.bind(this)>&times;</button>
  <strong>Comment Succesfully Created !</strong> <Link to=this.navigateLink() class="alert-link">Back to Current Blog</Link>.
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
