import React from "react";
import {connect} from "react-redux"

import Categories from "../dumb/Categories";
import BlogList from "../smart/BlogList";
import {fetchCategories} from "../../../action/blogActions"
import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";

@connect((store) => {
  return {fetched: store.blogs.fetched, fetching: store.blogs.fetching, error: store.blogs.error, blogList: store.blogs.blogList};
})

export default class CategoryList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchCategories())
  }

  render() {
    return (
      <div>
        <Categories/>
      </div>
    );
  }
}
//<BlogList />
