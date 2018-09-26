import request from '@/utils/request'
const baseApi = {
  registChannel ({
    appId = '',
    timestamp = '',
    signSystem = '',
    phone = '',
    channelCode = '',
    registAppName = '汇信财富',
    smsCode = ''
  }) {
    return request({
      url: 'user/channel/regist',
      method: 'post',
      params: {
        appId,
        timestamp,
        signSystem,
        phone,
        channelCode,
        registAppName,
        smsCode
      }
    })
  },
  registSmsCode ({
    appId = '',
    timestamp = '',
    signSystem = '',
    phone = ''
  }) {
    return request({
      url: 'user/registSmsCode',
      method: 'post',
      params: {
        appId,
        timestamp,
        signSystem,
        phone
      }
    })
  }
}
export default baseApi
