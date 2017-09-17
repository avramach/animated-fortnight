import React from "react";

import BlogListItem from "../dumb/BlogListItem";

export default class UserListItem extends React.Component {
  render() {
  const {matchType} = this.props;
  const {blogList} = this.props;
  const {count} = this.props;
  const {searchKey} = this.props;


    var blogsList =[];
    if (blogList.length) {
      blogsList = blogList.map((blog, i) => <BlogListItem key={i} blog={blog} searchView={true}/>);
    }
    return (
      <div class="container">
        <hgroup class="mb20">
          <h2 class="lead">
            <strong class="text-danger">{count}</strong> Matches in type {matchType} for <strong class="text-danger">{searchKey}</strong>
          </h2>
        </hgroup>
        {blogsList}
      </div>
    );
  }
}
