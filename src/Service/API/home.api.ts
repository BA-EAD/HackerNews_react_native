import {axiosInstance} from './api.config';
import APP_ENDPOINTS from './endpoints';

const getNews = async () => {
  try {
    const response = await axiosInstance.get(APP_ENDPOINTS.LOGIN);
    return {...response};
  } catch (error) {
    return {error, data: null};
  }
};


export default {
  getNews,
};
