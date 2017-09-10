const initialState = {
  commentList: [],
  fetching: false,
  fetched: false,
  error: null
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
  }
  return state
}
