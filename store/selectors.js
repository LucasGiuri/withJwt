import * as productsSelectors from './products/selectors';
import * as authSelectors from './auth/selectors';

export const getAllProducts = (state) => productsSelectors.getAllProducts(state.products);
export const isLoadingProducts = (state) => productsSelectors.isLoadingProducts(state.products);
export const getDashboardProducts = (state) => productsSelectors.getDashboardProducts(state.products);

export const getUser = (state) => authSelectors.getUser(state.auth);
export const getToken = (state) => authSelectors.getToken(state.auth);
export const isLogged = (state) => authSelectors.isLogged(state.auth);
export const isLoadingUser = (state) => authSelectors.isLoadingUser(state.auth);