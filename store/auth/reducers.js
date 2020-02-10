import { combineReducers } from 'redux';
import { LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS, 
        GET_USER_START, GET_USER_SUCCESS, GET_USER_FAIL } from './types';


const auth = (state = {logged: false, token: null}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        logged: true,
        token: action.token
      }
    }
    case LOGIN_FAIL: {
      return {
        logged: false,
        token: null
      }
    }
    default:
      return state
  }
};

const user = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {...state, ...action.user}
    default:
      return state
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case LOGIN_START:
      case LOGIN_FAIL:
      case GET_USER_START:
      case GET_USER_FAIL:
      return true
    case LOGIN_SUCCESS:
    default:
      return state
  }
};

const reducer = combineReducers({
  auth,
  user,
  isLoading
})

export default reducer;
