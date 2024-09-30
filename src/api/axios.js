import axios from "axios";
const API_URL = "http://localhost:1337/";

const axios_Api = axios.create({
  baseURL: API_URL,
});

// axios_Api.interceptors.request.use((config) => {
//   const Token = localStorage.getItem("token");
//   if (Token) {
//     config.headers.Authorization = `Bearer ${Token}`;
//   }
//   return config;
// });

// axios_Api.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject(error)
// );

export async function get(url, config = {}) {
  return await axios_Api
    .get(url, { ...config })
    .then((response) => response.data);
}

export async function post(url, data, config = {}) {
  return axios_Api
    .post(url, data, { ...config })
    .then((response) => response.data);
}

export async function put(url, data, config = {}) {
  return axios_Api
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function patch(url, data, config = {}) {
  return axios_Api
    .patch(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  return await axios_Api
    .delete(url, { ...config })
    .then((response) => response.data);
}
