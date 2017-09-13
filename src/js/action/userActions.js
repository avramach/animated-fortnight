/*Refactor and convert to single CRUD layer*/
import axios from "axios";

export function fetchUsers(blogId) {
  const url = "http://rest.learncode.academy/api/avramach/comments/"+blogId;
  return {
  type: "FETCH_USERS",
  payload:   axios.get("http://rest.learncode.academy/api/avramach/users")
  }
}

export function registerUser(user) {
  console.error("CREATE USER",user)
  return {
  type: "REGISTER_USER",
  payload:   axios.post("http://rest.learncode.academy/api/avramach/users",user)
  }
}

export function resetUserStore() {
  return {
    type: 'RESET_USERS_STATE'
  }
}

export function authenticateUser() {
  return {
    type: 'AUTHENTICATE'
  }
}
