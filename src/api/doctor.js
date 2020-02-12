/*
 * @Author: Benny
 * @Date: 2020-02-11 16:14:30
 * @Description:
 * @LastEditTime : 2020-02-12 13:49:09
 */

import request from '@/utils/request'

// 提交病历
export function submitCase(data) {
  return request({
    url: '/doctor/submitCase',
    method: 'post',
    data
  })
}

// 待看诊记录
export function getRecord(params) {
  return request({
    url: '/doctor/getRecord',
    method: 'get',
    params
  })
}

// 获取全部医生列表
export function getDoctorList(params) {
  return request({
    url: '/doctor/getDoctorList',
    method: 'get',
    params
  })
}

// 获取医生名下病人
export function getPatientList(data) {
  return request({
    url: '/doctor/getPatientList',
    method: 'post',
    data
  })
}

// 获取所有病历
export function getCasetList(params) {
  return request({
    url: '/doctor/getCaseList',
    method: 'get',
    params
  })
}
