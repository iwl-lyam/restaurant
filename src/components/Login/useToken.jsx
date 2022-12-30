export const getToken = () => {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}; 

export const signedIn = () => {
  return !!getToken()
}

export const setToken = userToken => {
  localStorage.setItem('token', JSON.stringify(userToken));
};