// 调拨在途库存表 api

import http from '@/utils/http'
import {
  param
} from '@/utils/index'

/**
 * 实例代码
 * @param {Object} params 需要传的参数
 */

export function getallotController(params) {
  return http({
    url: '/api/allotController/queryAll',
    method: 'post',
    data: param(params)
  })
}
