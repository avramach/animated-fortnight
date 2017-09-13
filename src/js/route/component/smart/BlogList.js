import React from "react";
import {connect} from "react-redux"

import BlogListItem from "../dumb/BlogListItem";
import ErrorIndicator from "../layout/ErrorIndicator";
import ProgressBar from "../layout/ProgressBar";
import {fetchBlogs} from "../../../action/blogActions"
import {resetBlogStore} from "../../../action/blogActions"

@connect((store) => {
  return {fetched: store.blogs.fetched, fetching: store.blogs.fetching, error: store.blogs.error, blogList: store.blogs.blogList};
})

export default class BlogList extends React.Component {
  componentWillMount() {
    this.props.dispatch(resetBlogStore())
    this.props.dispatch(fetchBlogs())
  }

  render() {
    const {blogList} = this.props;
    const {fetched} = this.props;
    const {fetching} = this.props;
    const {error} = this.props;
    //console.log("Props", this.props);
    console.log("BlogList ", {blogList});
    //console.log("Rendering BlogList ", fetched);

    if (fetched === true) {
      //console.log("Fetched True");
      const BlogsList = blogList.data.map((blog, i) => <BlogListItem key={blog.id} {...blog}/>);
      console.log("mapped", BlogsList);

      return (
        <div>
          <div class="row">{BlogsList}</div>
        </div>
      );
    } else if (error) {
      console.log("Error Condition");
      return (<ErrorIndicator/>);
    } else { //if ({fetching} === true)
      console.log("Fetching Condition");
      return (<ProgressBar/>); //return (<h1>Fetching Blogs Loading Spinner</h1>);
    }
  }
}
