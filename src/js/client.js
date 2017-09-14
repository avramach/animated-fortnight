import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {Provider} from "react-redux"
import store from "./store/store"

import BasicLayout from "./route/component/BasicLayout"
import BlogHome from "./route/page/BlogHome"
import ViewBlog from "./route/page/ViewBlog"
import NewBlog from "./route/page/NewBlog"
import UserProfile from "./route/page/UserProfile"
import ViewAuthors from "./route/page/ViewAuthors"
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
      <Route path="userprofile(/:author)" name="UserProfile" component={UserProfile}></Route>
      <Route path="signin(/:action)" name="SignIn" component={SignIn}></Route>
    </Route>
  </Router>
</Provider>, app);
