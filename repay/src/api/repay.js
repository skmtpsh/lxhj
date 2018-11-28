import request from '@/utils/request'
import { dateFormat } from 'vux'
import md5 from 'js-md5'

let AppSN = 'bailianqianbao88'
let AppKey = 'c808f285fb68b7e33e997d089da2885d'
let TimeStamp = dateFormat(new Date(), 'YYYYMMDDHHmmss')
let SignSystem = md5(AppKey + AppSN + TimeStamp)

const getParam = (name) => {
  var search = document.location.search
  var pattern = new RegExp('[?&]' + name + '\\=([^&]+)', 'g')
  var matcher = pattern.exec(search)
  var items = null
  if (matcher !== null) {
    try {
      items = decodeURIComponent(decodeURIComponent(matcher[1]))
    } catch (e) {
      try {
        items = decodeURIComponent(matcher[1])
      } catch (e) {
        items = matcher[1]
      }
    }
  }
  return items
}
let commonQuery = {
  timestamp: TimeStamp,
  signSystem: SignSystem,
  appSn: AppSN,
  token: getParam('token')
}

const repayApi = {
  /**
   * 获取应还列表
   * @param {*} userId  用户ID
   * @param {*} token 令牌
   * @param {*} appName app名称
   * @param {*} state 订单状态：0：应还款 1：已还款
   **/
  repayList ({
    userId = '',
    appName = '',
    state = 0
  } = {}) {
    return request({
      url: 'v3/repay/list',
      method: 'post',
      data: Object.assign({
        state,
        userId,
        appName
      }, commonQuery)
    })
  },
/**
   * 去还款
   * @param {*} repayId  repayId []
   * @param {*} paymentType 1:还款 2:展期付款; (支付类型)
   * @param {*} days int 7 14 21 30
   **/
  repayNow ({
    paymentType = 1,
    days = '',
    userId = '',
    appName = '',
    repayId = '',
    rateVersion = ''
  } = {}) {
    return request({
      url: 'pipe/repay',
      method: 'post',
      data: Object.assign({
        repayId,
        rateVersion,
        paymentType,
        userId,
        appName
      }, paymentType === 2 ? {days, rateVersion} : {}, commonQuery) // paymentType === 2 ? {days} : {}
    })
  },
  /**
   * 分期还款
   * @param {*} repayId  repayId string
   * @param {*} loanId  loanId
   **/
  repayItemComfirm ({
    repayType = '',
    repayIds = '',
    loanId = '',
    userId = '',
    appName = ''
  } = {}) {
    return request({
      // url: 'v3/repay/termRepay',
      url: 'v3/yidun/batch/aggregate/H5',
      method: 'post',
      data: Object.assign({
        repayType,
        loanId,
        userId,
        appName
      }, {repayIds}, commonQuery) // repayType === 0 ? {repayIds} : {}
    })
  },
  /**
   * 每期还款查询
   * @param {*} userId  用户ID
   * @param {*} token 令牌
   * @param {*} appName app名称
   * @param {*} loanId 借款单ID
   **/
  repayTerm ({
    userId = '',
    appName = '',
    loanId = ''
  } = {}) {
    return request({
      url: 'v3/repay/termRepayQuery',
      method: 'post',
      data: Object.assign({
        loanId,
        userId,
        appName
      }, commonQuery)
    })
  },
  /**
   * 提前还款查询
   * @param {*} userId  用户ID
   * @param {*} token 令牌
   * @param {*} appName app名称
   * @param {*} loanId 借款单ID
   **/
  repayEarly ({
    userId = '',
    appName = '',
    loanId = ''
  } = {}) {
    return request({
      url: 'v3/repay/earlyClearanceQuery',
      method: 'post',
      data: Object.assign({
        loanId,
        userId,
        appName
      }, commonQuery)
    })
  },
  /**
   * 展期申请
   * @param {*} userId  用户ID
   * @param {*} token 令牌
   * @param {*} appName app名称
   * @param {*} repayId 还款计划id
   * @param {*} days 展期天数，7天 14天 30天
   **/
  repayExtenApply ({
    userId = '',
    appName = '',
    repayId = '',
    days = 0
  } = {}) {
    return request({
      url: 'v3/extension/extensionApply',
      method: 'post',
      data: Object.assign({
        repayId,
        userId,
        appName
      }, days === 0 ? {} : { days }, commonQuery)
    })
  }
}
export default repayApi
