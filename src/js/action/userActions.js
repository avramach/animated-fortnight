/*Refactor and convert to single CRUD layer*/
import axios from "axios";
const ServerURL = "http://192.168.0.103:8080/reactx"
export function fetchUsers(blogId) {
  const url = ServerURL+"/users/";
  return {
  type: "FETCH_USERS",
  payload:   axios.get(url)
  }
}

export function registerUser(user) {
  const url = ServerURL+"/users/";
  console.error("CREATE USER",user)
  return {
  type: "REGISTER_USER",
  payload:   axios.post(url,user)
  }
}

export function resetUserStore() {
  return {
    type: 'RESET_USERS_STATE'
  }
}
