import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {Provider} from "react-redux"
import store from "./store/store"

import BasicLayout from "./route/component/BasicLayout"
import BlogHome from "./route/page/BlogHome"
import ViewBlog from "./route/page/ViewBlog"
import NewBlog from "./route/page/NewBlog"
import ViewProfile from "./route/page/ViewProfile"
import ViewAuthors from "./route/page/ViewAuthors"
import CategoryView from "./route/page/CategoryView"
import SearchView from "./route/page/SearchView"
import SignIn from "./route/page/SignIn"

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={BasicLayout}>
      <IndexRoute component={BlogHome}></IndexRoute>
      <Route path="popular" name="PopularBlog" component={BlogHome}></Route>
      <Route path="viewauthors" name="ViewAuthors" component={ViewAuthors}></Route>
      <Route path="viewblog(/:blogId)" name="ViewBlog" component={ViewBlog}></Route>
      <Route path="newblog" name="NewBlog" component={NewBlog}></Route>
      <Route path="categories(/:category)" name="Categories" component={CategoryView}></Route>
      <Route path="search(/:searchKey)" name="Search" component={SearchView}></Route>
      <Route path="userprofile(/:userName)" name="UserProfile" component={ViewProfile}></Route>
      <Route path="signin(/:action)" name="SignIn" component={SignIn}></Route>
    </Route>
  </Router>
</Provider>, app);
