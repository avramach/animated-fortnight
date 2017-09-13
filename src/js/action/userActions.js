/*Refactor and convert to single CRUD layer*/
import axios from "axios";

export function fetchUsers(blogId) {
  const url = "http://rest.learncode.academy/api/avramach/comments/"+blogId;
  return {
  type: "FETCH_USERS",
  payload:   axios.get("http://rest.learncode.academy/api/avramach/users")
  }
}
