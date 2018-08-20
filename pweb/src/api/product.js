import request from '@/utils/request'

export function getDetailPro (goodsId) {
  return request({
    url: '/goods/detail',
    method: 'post',
    params: { goodsId }
  })
}
