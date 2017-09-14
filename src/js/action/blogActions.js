/*Refactor and convert to single CRUD layer*/
import axios from "axios";
const ServerURL = "http://192.168.0.103:8080/reactx"

export function fetchBlogs(userName) {
  var url = ServerURL + "/blogs/";
  if (!(userName === undefined)) {
    url = url + "user/" + userName;
  }
  return {type: "FETCH_BLOGS", payload: axios.get(url)}
}

export function createBlog(token, blog) {
  const url = ServerURL + "/blogs/";
  const headers = {
    'Authorization': token
  };
  return {
    type: "CREATE_BLOG",
    payload: axios.post(url, blog, {headers})
  }
}

export function resetBlogStore() {
  return {type: 'RESET_BLOG_STATE'}
}

export function fetchSingleBlog(blogId) {
  const url = ServerURL + "/blogs/" + blogId;
  return {type: "FETCH_SINGLE_BLOG", payload: axios.get(url)}
}

export function fetchCategories(category) {
  var url = ServerURL + "/blogs/category";
  if (!(category === undefined)) {
    url = url + "/" + category;
  }
  return {type: "FETCH_CATEGORIES", payload: axios.get(url)}
}
