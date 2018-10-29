import axios from 'axios'
import YunLoading from '../yunLoading/yunLoading'

let loading = new YunLoading();

axios.interceptors.request.use(config => {
  loading.init();
  return config;
}, error => {
  loading.remove();
  return Promise.reject(error);
})

axios.interceptors.response.use(response => {
  loading.remove();
  return response;
}, error => {
  loading.remove();
  return Promise.reject(error.response);
})

export default axios