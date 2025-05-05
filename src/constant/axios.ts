import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { getServerSession } from 'next-auth/next';

import { authOptions } from '@/api/auth/[...nextauth]';

const baseUrl = process.env.API_URL;

class ApiClient {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.api.interceptors.request.use(async (config) => {
      const session: any = await getServerSession(authOptions);
      if (session?.accessToken) {
        config.headers.Authorization = `Bearer ${session.accessToken}`;
      }
      return config;
    });
  }

  post(
    url: string,
    { data }: AxiosRequestConfig,
    config?: AxiosRequestConfig<any>
  ) {
    return this.api.post(url, data, config);
  }

  get(url: string) {
    return this.api.get(url);
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
