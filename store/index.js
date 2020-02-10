import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import freeze from 'redux-freeze';
import thunk from 'redux-thunk';
import apiMiddleware from './apiMiddleware';
import products from './products/reducers';
import auth from './auth/reducers';

const rootReducer = combineReducers({products, auth})

const makeStore = (initialState) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(freeze, thunk, apiMiddleware)))
};

export default makeStore;
