const initialState = {
  commentList: [],
  fetching: false,
  fetched: false,
  error: null,
  posted: false,
  posting: false,
  posterror: false,
  postedBlog: {}
};

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case "FETCH_COMMENTS_PENDING":
      {
        return {
          ...state,
          fetching: true
        }
      }
    case "FETCH_COMMENTS_REJECTED":
      {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
      }
    case "FETCH_COMMENTS_FULFILLED":
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          commentList: action.payload
        }
      }
    case "RESET_COMMENT_STATE":
      {
        return {
          ...state,
          posted: false,
          posting: false,
          posterror: false
        }
      }
    case "CREATE_COMMENT_FULFILLED":
      {
        return {
          ...state,
          posting: false,
          posted: true,
          postedComment: action.payload
        }
      }
    case "CREATE_COMMENT_PENDING":
      {
        return {
          ...state,
          posting: true
        }
      }
    case "CREATE_COMMENT_REJECTED":
      {
        return {
          ...state,
          posting: false,
          posterror: action.payload
        }
      }
  }
  return state
}
