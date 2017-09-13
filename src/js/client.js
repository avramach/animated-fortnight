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
import Login from "./route/page/Login"

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
      <Route path="userprofile" name="UserProfile" component={UserProfile}></Route>
      <Route path="login" name="Login" component={Login}></Route>
    </Route>
  </Router>
</Provider>, app);
