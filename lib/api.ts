import axios from "axios";
// import { API_BASE_URL } from "./config";

const api = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;


export async function fetchData(endpoint: string) {
  return fetch(endpoint).then((res) => res.json());
}
