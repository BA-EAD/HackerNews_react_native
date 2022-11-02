import axios from 'axios';
import {configure} from 'axios-hooks';
import LRU from 'lru-cache';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

const cache = new LRU({max: 10});
export let axiosInstance: any;

const initApiConfig = () => {
  axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  configure({axios: axiosInstance, cache});
};

export default initApiConfig;
