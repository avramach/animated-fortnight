/*Refactor and convert to single CRUD layer*/
import axios from "axios";

export function fetchComments(blogId) {
  const url = "http://rest.learncode.academy/api/avramach/comments/"+blogId;
  return {
  type: "FETCH_COMMENTS",
  payload:   axios.get("http://rest.learncode.academy/api/avramach/comments")
  }
}

export function createComment(comment) {
  console.error("CREATE COMMENT ",comment)
  return {
  type: "CREATE_COMMENT",
  payload:   axios.post("http://rest.learncode.academy/api/avramach/comments",comment)
  }
}

export function resetCommentStore() {
  return {
    type: 'RESET_COMMENT_STATE'
  }
}
