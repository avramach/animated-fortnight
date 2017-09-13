const initialState = {
  authenticated: false,
  authenticating: false,
  authenticateError: null,
  authenticatedUser: {}
};

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case "AUTHENTICATE_PENDING":
      {
        return {
          ...state,
          authenticating: true
        }
      }
    case "AUTHENTICATE_REJECTED":
      {
        return {
          ...state,
          authenticating: false,
          authenticateError: action.payload
        }
      }
    case "AUTHENTICATE_FULFILLED":
      {
        return {
          ...state,
          authenticating: false,
          authenticated: true,
          authenticatedUser: action.payload
        }
      }
    case "RESET_AUTHENTICATE_STATE":
      {
        return {
          ...state,
          authenticated: false,
          authenticating: false,
          authenticateError: null,
          authenticatedUser: {}
        }
      }

  }
  return state
}
