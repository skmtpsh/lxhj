const fiskMeta = {
  riskDataCode: [
    {
      name: '建议洗白（正常履约）',
      value: '0'
    },
    {
      name: '建议洗白（逾期又还款）',
      value: '1'
    },
    {
      name: '无法确认',
      value: '2'
    },
    {
      name: '空值未知 ',
      value: '3'
    },
    {
      name: '其他异常',
      value: '9'
    }
  ],
  riskBlackDataCode: [
    {
      name: '建议拉黑 ( 逾期未还款 )',
      value: '0'
    },
    {
      name: '无法确认',
      value: '1'
    },
    {
      name: '空值未知',
      value: '2'
    },
    {
      name: '其他异常',
      value: '9'
    }
  ],
  riskQueryReasonCode: [
    {
      name: '贷款审批',
      value: '10'
    },
    {
      name: '贷后管理',
      value: '11'
    },
    {
      name: '信用卡审批',
      value: '12'
    },
    {
      name: '担保资格审查',
      value: '13'
    },
    {
      name: '保前审查',
      value: '14'
    }
  ],
  riskItemTypeCode: [
    {
      name: '证件号码',
      value: '101010'
    }
  ],
  riskTypeCode: [
    {
      name: '伪冒类',
      value: '11'
    },
    {
      name: '资料虚假类',
      value: '12'
    },
    {
      name: '丧失还款能力类',
      value: '10'
    },
    {
      name: '用途虚假类',
      value: '13'
    },
    {
      name: '其他',
      value: '19'
    }
  ],
  approvalStatusCode: [
    {
      name: '审核中',
      value: '201'
    },
    {
      name: '批贷已放款',
      value: '202'
    },
    {
      name: '拒贷',
      value: '203'
    },
    {
      name: '客户放弃',
      value: '204'
    }
  ],
  loanStatusCode: [
    {
      name: '正常',
      value: '301'
    },
    {
      name: '逾期',
      value: '302'
    },
    {
      name: '结清',
      value: '303'
    }
  ],
  loanTypeCode: [
    // {
    //   name: '信用',
    //   value: '21'
    // },
    // {
    //   name: '抵押',
    //   value: '22'
    // },
    // {
    //   name: '担保',
    //   value: '23'
    // }
    {
      name: '未知',
      value: 0
    },
    {
      name: '个人信贷',
      value: 1
    },
    {
      name: '个人抵押',
      value: 2
    },
    {
      name: '企业信贷',
      value: 3
    },
    {
      name: '企业抵押',
      value: 4
    }
  ],
  loanStateCode: [
    {
      name: '未知',
      value: 0
    },
    {
      name: '拒贷',
      value: 1
    },
    {
      name: '批贷已放款',
      value: 2
    },
    {
      name: '待放款',
      value: 3
    },
    {
      name: '借款人放弃申请',
      value: 4
    },
    {
      name: '审核中',
      value: 5
    },
    {
      name: '待放款',
      value: 6
    }
  ],
  riskRepayState: [
    {
      name: '未知',
      value: 0
    },
    {
      name: '正常',
      value: 1
    },
    {
      name: 'M1',
      value: 2
    },
    {
      name: 'M2',
      value: 3
    },
    {
      name: 'M3',
      value: 4
    },
    {
      name: 'M4',
      value: 5
    },
    {
      name: 'M5',
      value: 6
    },
    {
      name: 'M6',
      value: 7
    },
    {
      name: 'M6+',
      value: 8
    },
    {
      name: '已还清',
      value: 9
    }
  ],
  riskDecision: [
    {
      value: 'Accept',
      name: '通过'
    },
    {
      value: 'Review',
      name: '人工审核'
    },
    {
      value: 'Reject',
      name: '拒绝'
    },
    {
      value: 'REVIEW',
      name: '人工审核'
    },
    {
      value: 'REJECT',
      name: '拒绝'
    },
    {
      value: 'PASS',
      name: '通过'
    }
  ],
  riskBlackLevel: [
    {
      name: '不是黑名单',
      value: 'none'
    },
    {
      name: '早起逾期',
      value: 'DLQX'
    },
    {
      name: '严重逾期',
      value: 'DLQ90plus'
    },
    {
      name: '欺诈',
      value: 'fraud'
    }
  ],
  riskConfirmStatus: [
    {
      name: 'M1',
      value: '逾期1-30天'
    },
    {
      name: 'M2',
      value: '逾期31-60天'
    },
    {
      name: 'M3',
      value: '逾期61-90天'
    },
    {
      name: 'M4',
      value: '逾期91-120天'
    },
    {
      name: 'M5',
      value: '逾期121-150天'
    },
    {
      name: 'M6',
      value: '逾期151-180天'
    },
    {
      name: 'M6+',
      value: '逾期181天及以上'
    },
    {
      name: 'suspected_fraud',
      value: '疑似欺诈'
    },
    {
      name: 'fraud',
      value: '欺诈'
    }
  ],
  riskCardPhoneCheck: [
    {
      name: '完全一致',
      value: 1
    },
    {
      name: '基本一致',
      value: 2
    },
    {
      name: '不一致',
      value: 3
    },
    {
      name: '无法验证',
      value: 4
    },
    {
      name: '无法验证',
      value: 5
    }
  ]
}
export default fiskMeta
