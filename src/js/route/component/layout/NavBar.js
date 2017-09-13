import React from "react";
import { IndexLink, Link } from "react-router";

export default class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const blogHomeClass = location.pathname === "/" ? "active" : "";
    const newBlogClass = location.pathname.match(/^\/newblog/) ? "active" : "";
    const viewAuthorsClass = location.pathname.match(/^\/viewauthors/) ? "active" : "";
    const popularBlogClass = location.pathname.match(/^\/popular/) ? "active" : "";
    const userProfileClass = location.pathname.match(/^\/userprofile/) ? "active" : "";
    const signInClass = location.pathname.match(/^\/signin\/login/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={blogHomeClass}>
                <IndexLink to="/" >BlogHome</IndexLink>
              </li>
              <li class={newBlogClass}>
                <Link to="newblog" >NewBlog</Link>
              </li>
              <li class={viewAuthorsClass}>
                <Link to="viewauthors" >Authors</Link>
              </li>
              <li class={popularBlogClass}>
                <Link to="popular" >PopularBlogs</Link>
              </li>
              <li class={userProfileClass}>
                <Link to="userprofile" >Profile</Link>
              </li>
              <li class={signInClass}>
                <Link to="signin/login" >SignIn</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
