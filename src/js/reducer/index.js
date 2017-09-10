import { combineReducers } from "redux"

import blogs from "./blogsReducer"
import comments from "./userReducer"
import user from "./commentReducer"

export default combineReducers({
  blogs,
  comments,
  user,
})
