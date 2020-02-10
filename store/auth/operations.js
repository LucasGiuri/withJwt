import Cookies from 'universal-cookie';
import { LOGIN, GET_USER } from './types';
import { loginService, getMyUser } from '../../apis/services';
import apiCall from '../apiCall';

export const login = (username, password) => {
  return async (dispatch) => {
    return dispatch(apiCall(
      LOGIN,
      () => loginService(username, password),
      (token) => {
        
        const cookies = new Cookies();
        cookies.set('vintraAT', token);

        return {
          token
        }
      }
    ))
  }
};

export const getUserAuth = (token) => {
  return async (dispatch) => {
    return dispatch(apiCall(
      GET_USER,
      () => getMyUser(token),
      (user) => {
        return {
          user
        }
      }
    ))
  }
};