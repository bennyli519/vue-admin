/*
 * @Author: Benny
 * @Date: 2020-02-07 13:41:05
 * @Descrition: 预约接口
 * @LastEditTime : 2020-02-16 14:57:18
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

// 获取药品
export function getMedicine(data) {
  return request({
    url: '/appoint/getMedicine',
    method: 'post',
    data
  })
}

// 获取病历
export function getCase(data) {
  return request({
    url: '/appoint/getCase',
    method: 'post',
    data
  })
}

// 修改状态
export function updateStatus(data) {
  return request({
    url: '/appoint/updateStatus',
    method: 'post',
    data
  })
}
