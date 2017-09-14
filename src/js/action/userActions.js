/*Refactor and convert to single CRUD layer*/
import axios from "axios";
const ServerURL = "http://192.168.0.103:8080/reactx"
export function fetchUsers(token) {
  const url = ServerURL+"/users/";
  const headers = { 'Authorization': token};
  return {
  type: "FETCH_USERS",
  payload:   axios.get(url,{headers})
  }
}

export function registerUser(user) {
  const url = ServerURL+"/users/";
  //console.log("CREATE USER",user)
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

export function fetchSingleUser(token,userName) {
  const url = ServerURL+"/users/"+userName;
  const headers = { 'Authorization': token};
  return {
  type: "FETCH_SINGLE_USER",
  payload:   axios.get(url,{headers})
  }
}
