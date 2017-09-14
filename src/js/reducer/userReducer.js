const initialState = {
  userList: [],
  fetching: false,
  fetched: false,
  error: null,
  registering: false,
  registered: false,
  registerError: null,
  registerUser: {},
  authDetails: {}
};

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case "FETCH_USERS_PENDING":
      {
        return {
          ...state,
          fetching: true
        }
      }
    case "FETCH_USERS_REJECTED":
      {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
      }
    case "FETCH_USERS_FULFILLED":
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          userList: action.payload
        }
      }
    case "RESET_USERS_STATE":
      {
        return {
          ...state,
          posted: false,
          posting: false,
          posterror: false,
          registering: false,
          registered: false,
          registerError: null,
          registerUser: {}
        }
      }
    case "REGISTER_USER_PENDING":
      {
        return {
          ...state,
          registering: true
        }
      }
    case "REGISTER_USER_REJECTED":
      {
        return {
          ...state,
          registering: false,
          error: action.payload
        }
      }
    case "REGISTER_USER_FULFILLED":
      {
        return {
          ...state,
          registering: false,
          registered: true,
          registeredUser: action.payload
        }
      }
  }
  return state
}
