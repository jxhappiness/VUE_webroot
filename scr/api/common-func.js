// 登录注册 api
import http from '@/utils/http';
import { getLS } from '@/utils';
// import { encrytRsa } from '@/utils/rsa';
// import { clientKey, md5Key } from './common-params';
// const md5 = require('@/utils/md5.min');

/**
 * 统一的加密方法
 * @param {String} url 请求的地址
 * @param {Object|String} data 携带的数据
 * @param {Boolean} user 是否需要用户标识
 * @returns 返回一个携带返回数据的 promise 对象
 */
export function commonApi(url, data, user) {
  const cc = getLS('cc');
  const vc = getLS('vc');

  let payload = {
    url
  };

  data ? payload.data = data : null;

  // 如果用户标识，则把用户标识加入到数据中
  if (user) {

    if (!cc || !vc) {
      console.warn('没有用户token，请先登录');
      return null;
    }

    payload.data.vc = vc;
    payload.data.cc = cc;
  }

  console.log(payload);
  return http({
    url: '',
    method: 'post',
    header: {
      'Content-Type': 'application/json'
    },
    data: payload
  });
}

/**
 * 统一的加密方法(废弃)
 * @param {String} url 请求的地址
 * @param {Object|String} data 携带的数据
 * @param {Boolean} user 是否需要用户标识
 * @returns 返回一个携带返回数据的 promise 对象
 */
/* export function commonApi(url, data, user) {
  const key = getLS('key');
  const basicKey = getLS('basicKey');
  const cc = getLS('cc');
  const vc = getLS('vc');

  // 如果用户标识，则把用户标识加入到数据中
  if (user) {
    data = {
      ...data,
      vc,
      cc
    };
  }

  const step1Data = encrytRsa(key, JSON.stringify({
    url,
    data
  }));

  const step2Data = encrytRsa(basicKey, JSON.stringify({
    data: step1Data,
    key: clientKey
  }));

  return http({
    url,
    method: 'post',
    header: {
      'Content-Type': 'application/json'
    },
    data: {
      data: step2Data,
      sign: md5.md5(`${step2Data}${md5Key}`).toUpperCase()
    }
  });
} */
