import { combineReducers } from "redux"

import blogs from "./blogsReducer"
import users from "./userReducer"
import comments from "./commentReducer"

export default combineReducers({
  blogs,
  comments,
  users,
})
