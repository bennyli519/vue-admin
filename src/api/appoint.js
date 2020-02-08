/*
 * @Author: Benny
 * @Date: 2020-02-07 13:41:05
 * @Descrition: 预约接口
 * @LastEditTime : 2020-02-07 13:44:12
 */
import request from '@/utils/request'

// 预约
export function book(data) {
  return request({
    url: '/appoint/book',
    method: 'post',
    data
  })
}

// 获取预约记录
export function getRecord(params) {
  return request({
    url: '/appoint/getRecord',
    method: 'get',
    params
  })
}

// 获取医生列表
export function getDoctor(data) {
  return request({
    url: '/appoint/getDoctorList',
    method: 'post',
    data
  })
}

