import request from '@/utils/request'
import { dateFormat } from 'vux'
import md5 from 'js-md5'

let AppID = 'bailianqianbao88'
let AppKey = 'c808f285fb68b7e33e997d089da2885d'
let TimeStamp = dateFormat(new Date(), 'YYYYMMDDHHmmss')
let SignSystem = md5(AppKey + AppID + TimeStamp)

let commonQuery = {
  appSn: AppID,
  timestamp: TimeStamp,
  signSystem: SignSystem,
  appName: '佰联钱包'
}

const registerApi = {
  registChannel ({
    phone = '',
    channelCode = '',
    smsCode = ''
  }) {
    return request({
      url: '/v2/user/channel/regist',
      method: 'post',
      data: Object.assign({
        phone,
        channelCode,
        smsCode
      }, commonQuery)
    })
  },
  registSmsCode ({
    phone = '',
    channelCode = ''
  }) {
    return request({
      url: '/v2/user/registSmsCode',
      method: 'post',
      data: Object.assign({
        phone,
        channelCode
      }, commonQuery)
    })
  }
}
export default registerApi
