import React from "react";

export default class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      commentText: ""
    };
  }
  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.error("onsubmit of commentform", this.state)
    this.props.onSubmit(this.state);
  }

  render() {
    console.log("CommentForm Rendered");
    return (
          <div>
          <hr></hr>
          <div class="well">
            <h4>Leave a Comment:</h4>
            <form role="form">
              <div class="form-group">
                <textarea class="form-control" rows="3" id="commentText" onChange={e => this.change(e)}></textarea>
              </div>
              <button type="submit" class="btn btn-primary" onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
          </div>
          <hr></hr>
          </div>
    );
  }
}
