import axios from 'axios'
// import Cookies from 'js-cookie'
import iView from 'iview'
// import { param } from './index'

const service = axios.create({
  // baseURL: 'http://localhost:8080/api',
  baseURL: 'http://localhost:8989/APIs',
  timeout: 1000 * 60 * 1 //分钟
})

service.interceptors.request.use((config) => {
  /* //带token
  if (Cookies.get('auth-token')) {
    config.headers['AUTH-TOKEN'] = Cookies.get('auth-token');
  }
  if (Cookies.get('loginName')) {
    config.data.authLoginName = Cookies.get('loginName');
  }
  config.data = param(config.data); */
  return config;
}, (error) => {
  console.log(error);
  iView.Message.error('请求超时！');
  return Promise.reject("请求超时！");
})

service.interceptors.response.use((response) => {
  /* response.headers['auth-token'] = 'abc';
  let token = response.headers['auth-token'] || '';
  Cookies.set('auth-token', token); */
  if (response.status && response.status == 200) {
    if (response.data.returnState == '0') {
      iView.Message.error(response.data.errorMessage || '业务异常！');
    } else if (response.data.returnState == '-1') {
      iView.Message.error(response.data.errorMessage || '系统异常！');
    }
  }
  return response.data;
}, (err) => {
  console.log(err);
  iView.Message.error('请求失败！');
  return Promise.reject("请求失败！")
})

export default service

