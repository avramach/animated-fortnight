const initialState = {
  blogList: [],
  fetching: false,
  fetched: false,
  error: null
};

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case "FETCH_BLOGS_PENDING":
      {
        return {
          ...state,
          fetching: true
        }
      }
    case "FETCH_BLOGS_REJECTED":
      {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
      }
    case "FETCH_BLOGS_FULFILLED":
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          blogList: action.payload
        }
      }
  }
  return state
}
