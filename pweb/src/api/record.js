import request from '@/utils/request'

export function getRecordsList ({token = '', userId = ''} = {}) {
  return request({
    url: '/repay/getGoodsRepayRecords',
    method: 'post',
    params: { token, userId }
  })
}

export function getRepayList ({token = '', userId = ''} = {}) {
  return request({
    url: '/repay/allRepayList',
    method: 'post',
    params: { token, userId }
  })
}
