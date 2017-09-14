const initialState = {
  blogList: [],
  fetching: false,
  fetched: false,
  error: null,
  posted: false,
  posting: false,
  posterror: false,
  postedBlog: {},
  singleFetching: false,
  singleFetched: false,
  singleError: null,
  singleBlog: {}
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
          blogList: action.payload.data
        }
      }
    case "CREATE_BLOG_FULFILLED":
      {
        return {
          ...state,
          posting: false,
          posted: true,
          postedBlog: action.payload.data
        }
      }
    case "CREATE_BLOG_PENDING":
      {
        return {
          ...state,
          posting: true
        }
      }
    case "CREATE_BLOG_REJECTED":
      {
        return {
          ...state,
          posting: false,
          posterror: action.payload
        }
      }
    case "RESET_BLOG_STATE":
      {
        return {
          ...state,
          blogList: [],
          fetching: false,
          fetched: false,
          error: null,
          posted: false,
          posting: false,
          posterror: false,
          postedBlog: {},
          singleFetching: false,
          singleFetched: false,
          singleError: null,
          singleBlog: {}
        }
      }
    case "FETCH_SINGLE_BLOG_PENDING":
      {
        return {
          ...state,
          singleFetching: true
        }
      }
    case "FETCH_SINGLE_BLOG_REJECTED":
      {
        return {
          ...state,
          singleFetching: false,
          singleError: action.payload
        }
      }
    case "FETCH_SINGLE_BLOG_FULFILLED":
      {
        return {
          ...state,
          singleFetching: false,
          singleFetched: true,
          singleBlog: action.payload.data
        }
      }
  }
  return state
}
