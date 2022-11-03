import axios from 'axios';
import {configure} from 'axios-hooks';
import LRU from 'lru-cache';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

const cache = new LRU({max: 10});
export let axiosInstance: any;

// create Axios Instance and uses BaseUrl and Timeout millsecond and header
// Base_Url: manage common Url
// timeout: set timeout any remote end can keep us waiting for the requested 
// resource for an indefinite period
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
