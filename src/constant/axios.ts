// constant/axios.ts
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

const baseUrl = "http://103.249.200.210:3000";

class ApiClient {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  setToken(token: string) {
    this.api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  post(url: string, { data }: AxiosRequestConfig, config?: AxiosRequestConfig<any>) {
    return this.api.post(url, data, config);
  }

  get(url: string, config?: AxiosRequestConfig<any>) {
    return this.api.get(url, config);
  }

  put(url: string, { data }: AxiosRequestConfig) {
    return this.api.put(url, data);
  }

  delete(url: string) {
    return this.api.delete(url);
  }
}

const api = new ApiClient();
export default api;
