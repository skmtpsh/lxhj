import { dateFormat, querystring } from 'vux'
import md5 from 'js-md5'
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
let AppKey = ''
let AppID = getParam('appId')
if (AppID === 'dunapiinto123456') { // sdk2.0
  AppKey = 'QaFR3CRTISJKFDS34'
} else if (AppID === 'diandianhua12345') { // 点点花
  AppKey = 'ba090a977fa8a94dd2b6545'
}
let TimeStamp = dateFormat(new Date(), 'YYYYMMDDHHmmss')
let SignSystem = md5(AppKey + AppID + TimeStamp)
let URL = location.search
// 公用CommonQuery
const commonQuery = {
  appId: AppID,
  timestamp: TimeStamp,
  signSystem: SignSystem
}
// 公用UrlQuery
const urlQuery = ({
  token = '',
  type = '',
  platform = '',
  mobile = ''
} = querystring.parse(URL.indexOf('?') !== -1 ? URL.substr(1) : '')) => {
  return {
    token,
    type,
    platform,
    mobile
  }
}
const requestQuery = Object.assign(urlQuery(), commonQuery)

export default requestQuery
