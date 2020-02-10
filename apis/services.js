import qs from 'query-string';
import axios from 'axios';

const BASE_API = "http://127.0.0.1:8000";

export async function getProducts(token) {
  const results = await axios.get(BASE_API +  "/api/v1/sensors", {
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${token}`,
    }
  }).then(response => response.data);
  return results;
};


export async function newProduct(token, product) {
  const productCreated = await axios.post(BASE_API + "/api/v1/sensors/", qs.stringify(product), {
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${token}`,
    },
  }).then(response => response.data);

  return productCreated;
};

export async function getMyUser(token) {
  const access = await axios.get(BASE_API + "/auth/me", {
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${token}`
    },
  }).then(response => response.data)

  return access;
};

export async function loginService(username, password) {
  const access = await axios.post(BASE_API + "/auth/login", qs.stringify({
    username: username, 
    password: password 
  }), {
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(response => response.data.access_token);

  return access;
};