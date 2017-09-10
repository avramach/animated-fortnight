/*Refactor and convert to single CRUD layer*/
import axios from "axios";

export function fetchBlogs() {
  return {
  type: "FETCH_BLOGS",
  payload:   axios.get("http://rest.learncode.academy/api/avramach/blogsy")
  }
}
