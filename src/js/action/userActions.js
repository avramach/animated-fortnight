import axios from "axios";

const ServerURL = __API__;

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
