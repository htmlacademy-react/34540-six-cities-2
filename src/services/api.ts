import axios, {AxiosInstance} from 'axios';


const ENDPOINT = 'https://13.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: ENDPOINT,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};


export {createAPI};
