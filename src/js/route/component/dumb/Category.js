import React from "react";
import {Link} from "react-router";

export default class Category extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.navigateClicked(e);
  }
  render() {
    const {category} = this.props;
    const {count} = this.props;
    const title = category + " : " + count;
    return (
      <div>
      <button type="submit" class="btn btn-primary btn-sm" id={category} onClick={e => this.onSubmit(e)}>
      {title}
      </button>
      </div>
    );
  }
}
