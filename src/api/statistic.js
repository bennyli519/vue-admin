/*
 * @Author: Benny
 * @Date: 2020-02-16 13:54:41
 * @Description:
 * @LastEditTime : 2020-02-16 13:55:17
 */
import request from '@/utils/request'

export function getCheck(params) {
  return request({
    url: '/statistic/check',
    method: 'get',
    params
  })
}
