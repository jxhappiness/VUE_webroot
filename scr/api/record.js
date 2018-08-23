// 调拨在途库存表 api
import http from '@/utils/http'
import { commonParams } from './common-params'
import { commonApi } from './common-func'

/**
 * 实例代码
 * @param {Object} params 需要传的参数
 */
/***历史记录****/
// export function getHistoryList(params) {
//   return http({
//     url: '/HistoryAPIs/getHistory',

//     method: 'post',
//     data: {...commonParams, ...params}
//   })
// }
// export const getHistoryList = params => commonApi('/HistoryAPIs/getHistory',{...commonParams, ...params});

export const getHistoryList = params => commonApi('/HistoryAPIs/getHistory',params,true);