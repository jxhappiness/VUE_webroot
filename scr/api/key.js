import http from '@/utils/http';
import { encrytRsa } from '@/utils/rsa';
import { clientKey } from './common-params';

/**
 * 获取 basicKey
 */
export function getBasicKeyApi() {
  return http({
    url: '/KeyAPIs/getBasicKey',
    method: 'post',
  })
}

/**
 * 获取 Key
 */
export function getKeyApi(publicKey) {
  const data = encrytRsa(publicKey, JSON.stringify({
    url: '/KeyAPIs/getKey',
    key: clientKey
  }));

  return http({
    url: '/KeyAPIs/getKey',
    method: 'post',
    header: {
      'Content-Type': 'application/json'
    },
    data: {
      data
    }
  });
}
