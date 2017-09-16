import React from "react";

import CategoryList from "../component/smart/CategoryList";

export default class CategoryView extends React.Component {
  render() {
    return (
      <div>
      <h1>Categories</h1>
      <CategoryList category={this.props.params.category}/>
      </div>
    );
  }
}
