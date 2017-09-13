import React from "react";

export default class ErrorIndicator extends React.Component {
  render() {
    return (
        <div class="alert alert-dismissible alert-danger">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>Oh snap!</strong>
          <a href="#" class="alert-link">Something Went Wrong,Retry Again</a>
        </div>
    );
  }
}
