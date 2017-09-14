import React from "react";

export default class CommentListItem extends React.Component {
  render() {
    const comment = this.props;
    ////console.log("Rendering Comment", this.props);
    //////console.log("Blog Object " , blog);
    return (
      <div>
        <div class="media">
          <a class="pull-left" href="#">
            <img class="media-object" src="http://placehold.it/64x64" alt=""></img>
          </a>
          <div class="media-body">
            <h4 class="media-heading">{comment.author}:
              <small>{comment.createDate}</small>
            </h4>
            {comment.commentText}
          </div>
        </div>
      </div>
    );
  }
}
