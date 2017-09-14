/*Refactor and convert to single CRUD layer*/
import axios from "axios";
const ServerURL = "http://192.168.0.103:8080/reactx"

export function fetchComments(blogId) {
  const url = ServerURL+"/blogs/"  +blogId + "/comments";
  return {
  type: "FETCH_COMMENTS",
  payload:   axios.get(url)
  }
}

export function createComment(token, blogId, comment) {
  ////console.log("CREATE COMMENT ",comment)
  const url = ServerURL+"/blogs/"  +blogId + "/comments";
//  const headers = { 'Authorization': "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtbGFyb3NhMCIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZWFjdHgvdXNlcnMvYXV0aGVudGljYXRlVXNlciIsImlhdCI6MTUwNTM1MjEyMywiZXhwIjoxNTA1MzUzMzIzfQ.5_QZo3IXZ0pUd5C8G4EU3Q26p0xYqyfxed415iV-9BMgbtjrLhbC6c81-eCBnZxLxfHbbzxd1A4qgbEHM1ZmHQ" };
  const headers = { 'Authorization': token};
  return {
  type: "CREATE_COMMENT",
  payload:   axios.post(url,comment,{headers})
  }
}

export function resetCommentStore() {
  return {
    type: 'RESET_COMMENT_STATE'
  }
}
