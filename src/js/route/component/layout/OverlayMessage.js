import React from "react";

export default class OverlayMessage extends React.Component {
  render() {
    return (
        <div class="alert alert-dismissible alert-success">
          <p><strong>{this.props.message}</strong></p>
          <button class="btn btn-primary btn-sm" type="submit"
            onClick={e => this.props.navigateClicked(e)} id={this.props.id}>{this.props.title}
          </button>
        </div>
    );
  }
}
