import { combineReducers } from 'redux';
import { GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_FAIL,
        GET_PRODUCT_START, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL,
        CREATE_ITEM_START, CREATE_ITEM_SUCCESS, CREATE_ITEM_FAIL,
        EDIT_ITEM_START, EDIT_ITEM_SUCCESS, EDIT_ITEM_FAIL,
        DELETE_ITEM_START, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAIL,
        SORT_BY_NAME, SEARCH_BY_NAME } from './types';

const sortByname = (key) => {
  let sortOrder = 1;

  if (key[0] === "-") {
      sortOrder = -1;
      key = key.substr(1);
  }

  return (a,b) => sortOrder == -1 ? b[key].localeCompare(a[key]): a[key].localeCompare(b[key]);
};

function searchByName(arr, name) {
  let newArray = [];
  arr.map(item => {
    if (item.name.toLowerCase().includes(name)) {
      newArray.push(item);
    }
  });
  return newArray;
};

function filterById(arr, id) {
  arr.map(item => {
    if (item.id === id) {
      return item;
    }
  })
};

const results = (state = [], action) => {
  switch (action.type) {
    case GET_DATA_START:
      return []
    case GET_DATA_SUCCESS: {
      return [...state, ...action.response];
    }
    case CREATE_ITEM_SUCCESS: {
      return [...state, ...action.response];
    }
    case SEARCH_BY_NAME: {
      const response = Object.assign(state);
      return searchByName(response, action.name);
    }
    case SORT_BY_NAME: {
      return state.slice().sort(sortByname(action.key));
    }
    default:
      return state
  }
};

const product = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS: {
      return {...state, ...action.result}
    }
    default:
      return state
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case GET_DATA_START:
    case GET_PRODUCT_START:
    case GET_PRODUCT_FAIL:
    case GET_DATA_FAIL:
    case EDIT_ITEM_START:
    case EDIT_ITEM_FAIL:
    case DELETE_ITEM_START:
    case DELETE_ITEM_FAIL:
    case CREATE_ITEM_START:
    case CREATE_ITEM_FAIL:
      return true
    case GET_DATA_SUCCESS:
    case CREATE_ITEM_SUCCESS:
    case DELETE_ITEM_SUCCESS:
    case EDIT_ITEM_SUCCESS:
      return false
    default:
      return state
  }
};

const reducer = combineReducers({
  results,
  product,
  isLoading
})

export default reducer;
