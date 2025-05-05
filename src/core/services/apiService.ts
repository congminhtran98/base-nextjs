import axios from "axios";

const api = axios.create({
  baseURL: "http://103.249.200.210:3000",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default api;
