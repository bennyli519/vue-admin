import request from '@/utils/request'

export function createOffice(data) {
  return request({
    url: '/office/createOffice',
    method: 'post',
    data
  })
}


export function deleteOffice(data) {
    return request({
      url: '/office/deleteOffice',
      method: 'post',
      data
    })
  }

export function getList(params) {
    return request({
      url: '/office/getOfficeList',
      method: 'get',
      params
    })
  }
  
