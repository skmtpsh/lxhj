import request from '@/utils/request'

export function getAddrList ({token = '', userId = ''} = {}) {
  return request({
    url: '/address/list',
    method: 'post',
    params: { token, userId }
  })
}

export function addAddr ({token = '', userId = '', recName = '', recMobile = '', isDefault = '', detailAddress = ''} = {}) {
  return request({
    url: '/address/save',
    method: 'post',
    params: { token, userId, recName, recMobile, isDefault, detailAddress }
  })
}
export function editAddr ({token = '', userId = '', addressid = ''} = {}) {
  return request({
    url: '/address/edit',
    method: 'post',
    params: { token, userId, addressid }
  })
}

export function editSaveAddr ({token = '', userId = '', recName = '', recMobile = '', isDefault = '', detailAddress = '', addressId = ''} = {}) {
  return request({
    url: '/address/update',
    method: 'post',
    params: { token, userId, recName, recMobile, isDefault, detailAddress, addressId }
  })
}

export function removeAddr ({token = '', userId = ''} = {}) {
  return request({
    url: '/address/del',
    method: 'post',
    params: { token, userId }
  })
}
