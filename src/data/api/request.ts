/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_OPENAI_API_URL,
  headers: {
    common: {
      Authorization: 'Bearer ' + import.meta.env.VITE_APP_OPENAI_API_KEY,
      'OpenAI-Organization': import.meta.env.VITE_APP_OPENAI_ORG
    }
  }
});

export type Response<T = any> = {
  status: number;
  message: string;
  data: T;
};

type Method = 'get' | 'post';

export type MyResponse<T = any> = Promise<Response<T>>;

/**
 *
 * @param method - request methods
 * @param url - request url
 * @param data - request data or params
 */
export const request = <T = any>(
  method: Method,
  urlPath: string,
  data?: any,
  config?: AxiosRequestConfig,
): MyResponse<T> => {
  const prefix = '/v1';
  const urlApi = prefix + urlPath;
  if (method === 'post') {
    return axiosInstance.post(urlApi, data, config);
  }
  return axiosInstance.get(urlApi, {
    params: data,
    ...config,
  });
};
