const sideBar = {
  baseInfo: [
    {
      key: 'BASEINFO',
      ico: '',
      value: '基本信息',
      child: []
    }
  ],
  fiskInfo: [
    {
      key: 'BLACK',
      ico: 'blacklist',
      value: '黑名单',
      child: [
        {
          key: 'FISK_BLACKAGENT',
          ico: '',
          value: '机构黑名单',
          child: []
        },
        {
          key: 'FISK_BLACKHULU',
          ico: '',
          value: '葫芦黑名单',
          child: []
        },
        {
          key: 'FISK_XINYAN',
          ico: '',
          value: '新颜征信负面拉黑',
          child: []
        },
        {
          key: 'FISK_XINYAN',
          ico: '',
          value: '新颜征信负面洗白',
          child: []
        },
        {
          key: 'FISK_BAIQISHI_BLACK',
          ico: '',
          value: '白骑士黑名单',
          child: []
        },
        {
          key: 'FISK_BAIRONG',
          ico: '',
          value: '百融数据',
          child: []
        }
      ]
    },
    {
      key: 'DUOTOU',
      ico: 'duotou',
      value: '多头',
      child: [
        {
          key: 'FISK_TONGDUN',
          ico: '',
          value: '同盾数据',
          child: []
        },
        {
          key: 'FISK_BAIQISHI_MULTI',
          ico: '',
          value: '白骑士-多头',
          child: []
        },
        {
          key: 'FISK_MORPHO',
          ico: '',
          value: '中智诚',
          child: []
        },
        {
          key: 'FISK_SUANHUA',
          ico: '',
          value: '算话',
          child: []
        },
        {
          key: 'FISK_AFU',
          ico: '',
          value: '至诚阿福',
          child: []
        },
        {
          key: 'FISK_ZHENGXIN',
          ico: '',
          value: '91征信',
          child: []
        }
      ]
    },
    {
      key: 'ANTI',
      ico: 'dunpai',
      value: '反欺诈',
      child: [
        {
          key: 'FISK_BAIQISHI_ANTI',
          ico: '',
          value: '白骑士-反欺诈风险检测',
          child: []
        },
        {
          key: 'FIST_REGISTER',
          ico: '',
          value: '白骑士-注册信息',
          child: []
        }
        // {
        //   key: 'FIST_ZHIMA',
        //   ico: '',
        //   value: '白骑士-芝麻信用',
        //   child: []
        // }
      ]
    },
    {
      key: 'TRADE',
      ico: 'trade-assurance',
      value: '电商数据',
      child: [
        {
          key: 'FISK_BAIQISHI_TAOBAO',
          ico: '',
          value: '白骑士-淘宝',
          child: []
        }
      ]
    }
  ],
  operateInfo: [
    {
      key: 'OPERATEINFO',
      ico: '',
      value: '运营商报告',
      child: []
    }
  ],
  addressInfo: [
    {
      key: 'ADDRESSINFO',
      ico: '',
      value: '通讯录',
      child: []
    }
  ],
  callInfo: [
    {
      key: 'CALLINFO',
      ico: '',
      value: '通话记录',
      child: []
    }
  ],
  schoolInfo: [
    {
      key: 'SCHOOLINFO',
      ico: '',
      value: '学信网',
      child: []
    }
  ],
  socialInfo: [
    {
      key: 'SOCIALINFO',
      ico: '',
      value: '社保',
      child: []
    }
  ]
}

export default sideBar
