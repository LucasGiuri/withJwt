import { GET_DATA, SORT_BY_NAME, GET_PRODUCT,
        SEARCH_BY_NAME, CREATE_ITEM, DELETE_ITEM, EDIT_ITEM } from './types';
import { getProducts, newProduct } from '../../apis/services';
import apiCall from '../apiCall';

export const getData = (token) => {
  return async (dispatch) => {
    return dispatch(apiCall(
      GET_DATA,
      () => getProducts(token),
      (response) => {
        return {
          response
        }
      }
    ))
  }
};

export const createProduct = (token, product) => {
  return async (dispatch) => {
    return dispatch(apiCall(
      CREATE_ITEM,
      () => newProduct(token, product),
      (response) => {
        return {
          response
        }
      }
    ))
  }
  
}

export const getProduct = (token, id) => {
  return async (dispatch) => {
    return dispatch(apiCall(
      GET_PRODUCT,
      () => getProducts(token, id),
      (response) => {
        return {
          response
        }
      }
    ))
  }
};

export const searchByName = (name) => {
  return {
    type: SEARCH_BY_NAME,
    name: name
  }
}

export const editItem = (id) => {
  return {
    type: EDIT_ITEM,
    id: id
  }
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id: id
  }
};

export const sortByName = (key) => {
  return {
    type: SORT_BY_NAME,
    key: key
  }
};