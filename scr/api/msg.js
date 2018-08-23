// 调拨在途库存表 api
import http from '@/utils/http'
import { commonParams } from './common-params'


/**
 * 实例代码
 * @param {Object} params 需要传的参数
 */
/***请求消息列表****/
export function getMessage(params) {
  console.log({...commonParams, ...params})
  return http({
    url: '/ClientsAPIs/DHistory',
    method: 'post',
    data: {...commonParams, ...params}
  })
}
