import { combineReducers } from "redux"

import blogs from "./blogsReducer"
import users from "./userReducer"
import comments from "./commentReducer"
import authenticate from "./authenticateReducer"

export default combineReducers({
  blogs,
  comments,
  users,
  authenticate
})
