import axios from "axios";

const ServerURL = __API__;

export function authenticateUser(user) {
  const url = ServerURL+"/users/"+"authenticateUser";
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
