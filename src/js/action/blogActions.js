/*Refactor and convert to single CRUD layer*/
import axios from "axios";

export function fetchBlogs() {
  return {
  type: "FETCH_BLOGS",
  payload:   axios.get("http://rest.learncode.academy/api/avramach/blogsy")
  }
}

export function createBlog(blog) {
  return {
  type: "CREATE_BLOG",
  payload:   axios.post("http://rest.learncode.academy/api/avramach/blogsy",blog)
  }
}

export function resetBlogStore() {
  return {
    type: 'RESET_BLOG_STATE'
  }
}

export function fetchSingleBlog(blogId) {
  const url = "http://rest.learncode.academy/api/avramach/blogsy/"+blogId;
  return {
  type: "FETCH_SINGLE_BLOG",
  payload:   axios.get(url)
  }
}
