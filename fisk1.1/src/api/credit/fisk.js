import request from '@/utils/request'

const fiskApi = {
  FISK_BLACKAGENT ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '谢怀馨',
    mobile = '17506043988',
    idCard = '35078319930807201X',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      url: '/risk/blacklist/organization.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce,
        cacheMinute
      }
    })
  },
  FISK_BLACKHULU ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '谢怀馨',
    mobile = '17506043988',
    idCard = '35078319930807201X',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      url: '/risk/blacklist/hulu.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce,
        cacheMinute
      }
    })
  },
  FISK_TONGDUN ({
    appId = 'qiandada12345678',
    timestamp = '20180912201305',
    name = '邹勇',
    mobile = '18115977883',
    idCard = '321281198804020017',
    signSystem = 'd426fab56fb03d97dc28a75ba1b0e065',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      url: '/risk/blacklist/tongdun.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce,
        cacheMinute
      }
    })
  },
  FISK_XINYANBALCK ({
    appId = 'qiandada12345678',
    timestamp = '20180912201305',
    name = '陶美海',
    mobile = '17793165254',
    idCard = '620103199308015331',
    signSystem = 'd426fab56fb03d97dc28a75ba1b0e065',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      url: '/risk/blacklist/xinyanblack.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce,
        cacheMinute
      }
    })
  },
  FISK_XINYANWHITE ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '姜昕冯',
    mobile = '17506043988',
    idCard = '420111199105315513',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      url: '/risk/blacklist/xinyanwhite.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce,
        cacheMinute
      }
    })
  },
  FISK_BAIQISHI ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '熊瑶',
    mobile = '13402553947',
    idCard = '360681199907192228',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      url: '/risk/blacklist/baiqishi.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce: true,
        cacheMinute
      }
    })
  },
  FISK_BAIQISHI_TAOBAO ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '王侃',
    mobile = '15268416427',
    idCard = '330205199601293313',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      url: '/risk/blacklist/taobao.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce,
        cacheMinute
      }
    })
  },
  FISK_FAYANYUN ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '杨海艳',
    mobile = '15104693459',
    idCard = '411522198701187541',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      url: '/risk/blacklist/fayanyun.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce,
        cacheMinute
      }
    })
  },
  FISK_MORPHO ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '李娜',
    mobile = '18845751442',
    idCard = '230306199810104249',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      // url: '/risk/blacklist/morpho.cmd',
      url: '/risk/blacklist/shenyue.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        loanType: '1', // 多了一个参数
        isForce,
        cacheMinute
      }
    })
  },
  FISK_HAORI ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '李娜',
    mobile = '18845751442',
    idCard = '230306199810104249',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      // url: '/risk/blacklist/morpho.cmd',
      url: '/risk/blacklist/haori.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        loanType: '1', // 多了一个参数
        isForce,
        cacheMinute
      }
    })
  },
  FISK_SUANHUA ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '卢杨杨',
    mobile = '18561583600',
    idCard = '370283199108204512',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      url: '/risk/blacklist/suanhua.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce,
        cacheMinute
      }
    })
  },
  FISK_AFU ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '杨海艳',
    mobile = '15104693459',
    idCard = '411522198701187541',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      url: '/risk/blacklist/afu.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce,
        cacheMinute
      }
    })
  },
  FISK_ZHENGXIN ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '陈水金',
    mobile = '13356881861',
    idCard = '350424198301082038',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      url: '/risk/blacklist/zhengxin.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce,
        cacheMinute
      }
    })
  },
  FISK_BAIRONG ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '杜秀军',
    mobile = '13697871988',
    idCard = '370612198503022737',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      url: '/risk/blacklist/bairong.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce,
        cacheMinute
      }
    })
  },
  FIST_REGISTER ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '卢杨杨',
    mobile = '18561583600',
    idCard = '370283199108204512',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      url: '/risk/blacklist/register.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce,
        cacheMinute
      }
    })
  },
  FIST_ZHIMA ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '熊瑶',
    mobile = '13402553947',
    idCard = '360681199907192228',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    isForce = false,
    cacheMinute = 2
  }) {
    return request({
      url: '/risk/blacklist/zhima.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce,
        cacheMinute
      }
    })
  }
}

export default fiskApi
