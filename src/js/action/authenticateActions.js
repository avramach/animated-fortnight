import axios from "axios";
/*Refactor and convert to single CRUD layer*/
const ServerURL = "http://192.168.0.103:8080/reactx"

export function authenticateUser(user) {
  const url = ServerURL+"/users/"+"authenticateUser";
  //console.log("authencticaiton ",url , user)
  return {
    type: 'AUTHENTICATE',
    payload:   axios.post(url,user)
  }
}
export function resetAuthenticateStore() {
  return {
    type: 'RESET_AUTHENTICATE_STATE'
  }
}
