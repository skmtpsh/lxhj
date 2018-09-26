import request from '@/utils/request'

export function orderConfirm ({
  token = '',
  userId = '',
  termLine = '',
  goodsId = '',
  goodsName = '',
  goodsPrice = '',
  amount = '',
  useState = '',
  url = '',
  addressId = '',
  note = ''
} = {}) {
  return request({
    url: '/loan/goods/detail/confirm',
    method: 'post',
    params: { token, userId, termLine, goodsId, goodsName, goodsPrice, amount, useState, url, addressId, note }
  })
}

export function orderDetail ({
  token = '',
  userId = '',
  loanApplyId = '',
  pageNum = ''
} = {}) {
  return request({
    url: '/loan/goods/rentingMallList',
    method: 'post',
    params: { token, userId, loanApplyId, pageNum }
  })
}
