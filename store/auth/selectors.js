export const getUser = (auth) => auth.user;
export const getToken = (auth) => auth.auth.token;
export const isLogged = (auth) => auth.auth.logged;
export const isLoadingUser = (auth) => auth.isLoading;