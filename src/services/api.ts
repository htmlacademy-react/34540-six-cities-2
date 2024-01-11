import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {Token} from './token.ts';


const ENDPOINT = 'https://13.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: ENDPOINT,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = Token.get();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};


export {createAPI};
