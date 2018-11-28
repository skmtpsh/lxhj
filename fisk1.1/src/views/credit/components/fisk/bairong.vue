<template>
  <dl class="cardinfo">
    <dd>
      <el-row :gutter="60">
        <el-col :span="24"><span>特殊名单验证产品输出标识：</span><b>{{fiskData.riskFlagSpeciallistC === '1' ? '匹配成功' : '未命中'}}</b></el-col>
      </el-row>
      <el-row :gutter="60">
        <el-col :span="24"><span>总结：</span></el-col>
        <el-col :span="24"><span>本人直接命中 <b>{{bairongObj.total0}}</b> 次</span></el-col>
        <el-col :span="24"><span>一度关系命中 <b>{{bairongObj.total1}}</b> 次</span></el-col>
        <el-col :span="24"><span>二度关系命中 <b>{{bairongObj.total2}}</b> 次</span></el-col>
      </el-row>
      <el-row :gutter="60">
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdAbnormal">通过身份证号查询高危行为
            <el-tag size="small" :type="fiskData.riskSlIdAbnormal === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdAbnormal | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdPhoneOverdue">通过身份证号查询电信欠费
            <el-tag size="small" :type="fiskData.riskSlIdPhoneOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdPhoneOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdCourtBad">通过身份证号查询法院失信人
            <el-tag size="small" :type="fiskData.riskSlIdCourtBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdCourtBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdCourtExecuted">通过身份证号查询法院被执行人
            <el-tag size="small" :type="fiskData.riskSlIdCourtExecuted === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdCourtExecuted | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdBankBad">通过身份证号查询银行(含信用卡)中风险
            <el-tag size="small" :type="fiskData.riskSlIdBankBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdBankBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdBankOverdue">通过身份证号查询银行(含信用卡)一般风险
            <el-tag size="small" :type="fiskData.riskSlIdBankOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdBankOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdBankFraud">通过身份证号查询银行(含信用卡)资信不佳
            <el-tag size="small" :type="fiskData.riskSlIdBankFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdBankFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdBankLost">通过身份证号查询银行(含信用卡)高风险
            <el-tag size="small" :type="fiskData.riskSlIdBankLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdBankLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdBankRefuse">通过身份证号查询银行(含信用卡)拒绝
            <el-tag size="small" :type="fiskData.riskSlIdBankRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdBankRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdP2PBad">通过身份证号查询电信欠费
            <el-tag size="small" :type="fiskData.riskSlIdP2PBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdP2PBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdP2POverdue">通过身份证号查询非银(含全部非银类型)一般风险
            <el-tag size="small" :type="fiskData.riskSlIdP2POverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdP2POverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdP2PFraud">通过身份证号查询非银(含全部非银类型)资信不佳
            <el-tag size="small" :type="fiskData.riskSlIdP2PFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdP2PFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdP2PLost">通过身份证号查询非银(含全部非银类型)高风险
            <el-tag size="small" :type="fiskData.riskSlIdP2PLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdP2PLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdP2PRefuse">通过身份证号查询非银(含全部非银类型)拒绝
            <el-tag size="small" :type="fiskData.riskSlIdP2PRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdP2PRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankP2PBad">通过身份证号查询非银-P2P中风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankP2PBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankP2PBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankP2POverdue">通过身份证号查询非银-P2P一般风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankP2POverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankP2POverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankP2PFraud">通过身份证号查询非银-P2P资信不佳
            <el-tag size="small" :type="fiskData.riskSlIdNbankP2PFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankP2PFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankP2PLost">通过身份证号查询非银-P2P高风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankP2PLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankP2PLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankP2PRefuse">通过身份证号查询非银-P2P拒绝
            <el-tag size="small" :type="fiskData.riskSlIdNbankP2PRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankP2PRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankMcBad">通过身份证号查询非银-小贷中风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankMcBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankMcBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankMcOverdue">通过身份证号查询非银-小贷一般风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankMcOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankMcOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankMcFraud">通过身份证号查询非银-小贷资信不佳
            <el-tag size="small" :type="fiskData.riskSlIdNbankMcFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankMcFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankMcLost">通过身份证号查询非银-小贷高风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankMcLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankMcLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankMcRefuse">通过身份证号查询非银-小贷拒绝
            <el-tag size="small" :type="fiskData.riskSlIdNbankMcRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankMcRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankCaBad">通过身份证号查询非银-现金类分期中风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankCaBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankCaBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankCaOverdue">通过身份证号查询非银-现金类分期一般风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankCaOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankCaOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankCaFraud">通过身份证号查询非银-现金类分期资信不佳
            <el-tag size="small" :type="fiskData.riskSlIdNbankCaFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankCaFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankCaLost">通过身份证号查询非银-现金类分期高风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankCaLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankCaLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankCaRefuse">通过身份证号查询非银-现金类分期拒绝
            <el-tag size="small" :type="fiskData.riskSlIdNbankCaRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankCaRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankComBad">通过身份证号查询非银-代偿类分期中风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankComBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankComBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankComOverdue">通过身份证号查询非银-代偿类分期一般风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankComOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankComOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankComFraud">通过身份证号查询非银-代偿类分期资信不佳
            <el-tag size="small" :type="fiskData.riskSlIdNbankComFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankComFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankComLost">通过身份证号查询非银-代偿类分期高风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankComLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankComLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankComRefuse">通过身份证号查询非银-代偿类分期拒绝
            <el-tag size="small" :type="fiskData.riskSlIdNbankComRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankComRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankCfBad">通过身份证号查询非银-消费类分期中风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankCfBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankCfBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankCfOverdue">通过身份证号查询非银-消费类分期一般风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankCfOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankCfOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankCfFraud">通过身份证号查询非银-消费类分期资信不佳
            <el-tag size="small" :type="fiskData.riskSlIdNbankCfFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankCfFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankCfLost">通过身份证号查询非银-消费类分期高风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankCfLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankCfLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankCfRefuse">通过身份证号查询非银-消费类分期拒绝
            <el-tag size="small" :type="fiskData.riskSlIdNbankCfRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankCfRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankOtherBad">通过身份证号查询非银-其他中风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankOtherBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankOtherBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankOtherOverdue">通过身份证号查询非银-其他一般风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankOtherOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankOtherOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankOtherFraud">通过身份证号查询非银-其他资信不佳
            <el-tag size="small" :type="fiskData.riskSlIdNbankOtherFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankOtherFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankOtherLost">通过身份证号查询非银-其他高风险
            <el-tag size="small" :type="fiskData.riskSlIdNbankOtherLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankOtherLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlIdNbankOtherRefuse">通过身份证号查询非银-其他拒绝
            <el-tag size="small" :type="fiskData.riskSlIdNbankOtherRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlIdNbankOtherRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellAbnormal">通过手机号查询高危行为
            <el-tag size="small" :type="fiskData.riskSlCellAbnormal === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellAbnormal | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellPhoneOverdue">通过手机号查询电信欠费
            <el-tag size="small" :type="fiskData.riskSlCellPhoneOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellPhoneOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellBankBad">通过手机号查询银行(含信用卡)中风险
            <el-tag size="small" :type="fiskData.riskSlCellBankBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellBankBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellBankOverdue">通过手机号查询银行(含信用卡)一般风险
            <el-tag size="small" :type="fiskData.riskSlCellBankOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellBankOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellBankFraud">通过手机号查询银行(含信用卡)资信不佳
            <el-tag size="small" :type="fiskData.riskSlCellBankFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellBankFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellBankLost">通过手机号查询银行(含信用卡)高风险
            <el-tag size="small" :type="fiskData.riskSlCellBankLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellBankLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellBankRefuse">通过手机号查询银行(含信用卡)拒绝
            <el-tag size="small" :type="fiskData.riskSlCellBankRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellBankRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellP2PBad">通过手机号查询非银(含全部非银类型)中风险
            <el-tag size="small" :type="fiskData.riskSlCellP2PBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellP2PBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellP2POverdue">通过手机号查询非银(含全部非银类型)一般风险
            <el-tag size="small" :type="fiskData.riskSlCellP2POverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellP2POverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellP2PFraud">通过手机号查询非银(含全部非银类型)资信不佳
            <el-tag size="small" :type="fiskData.riskSlCellP2PFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellP2PFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellP2PLost">通过手机号查询非银(含全部非银类型)高风险
            <el-tag size="small" :type="fiskData.riskSlCellP2PLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellP2PLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellP2PRefuse">通过手机号查询非银(含全部非银类型)拒绝
            <el-tag size="small" :type="fiskData.riskSlCellP2PRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellP2PRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankP2PBad">通过手机号查询非银-P2P中风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankP2PBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankP2PBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankP2POverdue">通过手机号查询非银-P2P一般风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankP2POverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankP2POverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankP2PFraud">通过手机号查询非银-P2P资信不佳
            <el-tag size="small" :type="fiskData.riskSlCellNbankP2PFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankP2PFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankP2PLost">通过手机号查询非银-P2P高风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankP2PLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankP2PLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankP2PRefuse">通过手机号查询非银-P2P拒绝
            <el-tag size="small" :type="fiskData.riskSlCellNbankP2PRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankP2PRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankMcBad">通过手机号查询非银-小贷中风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankMcBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankMcBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankMcOverdue">通过手机号查询非银-小贷一般风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankMcOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankMcOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankMcFraud">通过手机号查询非银-小贷资信不佳
            <el-tag size="small" :type="fiskData.riskSlCellNbankMcFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankMcFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankMcLost">通过手机号查询非银-小贷高风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankMcLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankMcLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankMcRefuse">通过手机号查询非银-小贷拒绝
            <el-tag size="small" :type="fiskData.riskSlCellNbankMcRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankMcRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankCaBad">通过手机号查询非银-现金类分期中风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankCaBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankCaBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankCaOverdue">通过手机号查询非银-现金类分期一般风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankCaOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankCaOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankCaFraud">通过手机号查询非银-现金类分期资信不佳
            <el-tag size="small" :type="fiskData.riskSlCellNbankCaFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankCaFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankCaLost">通过手机号查询非银-现金类分期高风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankCaLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankCaLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankCaRefuse">通过手机号查询非银-现金类分期拒绝
            <el-tag size="small" :type="fiskData.riskSlCellNbankCaRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankCaRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankComBad">通过手机号查询非银-代偿类分期中风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankComBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankComBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankComOverdue">通过手机号查询非银-代偿类分期一般风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankComOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankComOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankComFraud">通过手机号查询非银-代偿类分期资信不佳
            <el-tag size="small" :type="fiskData.riskSlCellNbankComFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankComFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankComLost">通过手机号查询非银-代偿类分期高风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankComLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankComLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankComRefuse">通过手机号查询非银-代偿类分期拒绝
            <el-tag size="small" :type="fiskData.riskSlCellNbankComRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankComRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankCfBad">通过手机号查询非银-消费类分期中风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankCfBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankCfBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankCfOverdue">通过手机号查询非银-消费类分期一般风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankCfOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankCfOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankCfFraud">通过手机号查询非银-消费类分期资信不佳
            <el-tag size="small" :type="fiskData.riskSlCellNbankCfFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankCfFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankCfLost">通过手机号查询非银-消费类分期高风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankCfLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankCfLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankCfRefuse">通过手机号查询非银-消费类分期拒绝
            <el-tag size="small" :type="fiskData.riskSlCellNbankCfRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankCfRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankOtherBad">通过手机号查询非银-其他中风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankOtherBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankOtherBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankOtherOverdue">通过手机号查询非银-其他一般风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankOtherOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankOtherOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankOtherFraud">通过手机号查询非银-其他资信不佳
            <el-tag size="small" :type="fiskData.riskSlCellNbankOtherFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankOtherFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankOtherLost">通过手机号查询非银-其他高风险
            <el-tag size="small" :type="fiskData.riskSlCellNbankOtherLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankOtherLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlCellNbankOtherRefuse">通过手机号查询非银-其他拒绝
            <el-tag size="small" :type="fiskData.riskSlCellNbankOtherRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlCellNbankOtherRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellAbnormal">通过联系人手机查询高危行为
            <el-tag size="small" :type="fiskData.riskSlLmCellAbnormal === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellAbnormal | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellPhoneOverdue">通过联系人手机查询电信欠费
            <el-tag size="small" :type="fiskData.riskSlLmCellPhoneOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellPhoneOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellBankBad">通过联系人手机查询银行(含信用卡)中风险
            <el-tag size="small" :type="fiskData.riskSlLmCellBankBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellBankBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellBankOverdue">通过联系人手机查询银行(含信用卡)一般风险
            <el-tag size="small" :type="fiskData.riskSlLmCellBankOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellBankOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellBankFraud">通过联系人手机查询银行(含信用卡)资信不佳
            <el-tag size="small" :type="fiskData.riskSlLmCellBankFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellBankFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellBankLost">通过联系人手机查询银行(含信用卡)高风险
            <el-tag size="small" :type="fiskData.riskSlLmCellBankLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellBankLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellBankRefuse">通过联系人手机查询银行(含信用卡)拒绝
            <el-tag size="small" :type="fiskData.riskSlLmCellBankRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellBankRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankP2PBad">通过联系人手机查询非银-P2P中风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankP2PBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankP2PBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankP2POverdue">通过联系人手机查询非银-P2P一般风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankP2POverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankP2POverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankP2PFraud">通过联系人手机查询非银-P2P资信不佳
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankP2PFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankP2PFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankP2PLost">通过联系人手机查询非银-P2P高风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankP2PLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankP2PLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankP2PRefuse">通过联系人手机查询非银-P2P拒绝
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankP2PRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankP2PRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankMcBad">通过联系人手机查询非银-小贷中风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankMcBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankMcBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankMcOverdue">通过联系人手机查询非银-小贷一般风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankMcOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankMcOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankMcFraud">通过联系人手机查询非银-小贷资信不佳
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankMcFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankMcFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankMcLost">通过联系人手机查询非银-小贷高风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankMcLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankMcLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankMcRefuse">通过联系人手机查询非银-小贷拒绝
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankMcRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankMcRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankCaBad">通过联系人手机查询非银-现金类分期中风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankCaBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankCaBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankCaOverdue">通过联系人手机查询非银-现金类分期一般风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankCaOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankCaOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankCaFraud">通过联系人手机查询非银-现金类分期资信不佳
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankCaFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankCaFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankCaLost">通过联系人手机查询非银-现金类分期高风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankCaLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankCaLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankCaRefuse">通过联系人手机查询非银-现金类分期拒绝
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankCaRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankCaRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankComBad">通过联系人手机查询非银-代偿类分期中风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankComBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankComBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankComOverdue">通过联系人手机查询非银-代偿类分期一般风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankComOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankComOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankComFraud">通过联系人手机查询非银-代偿类分期资信不佳
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankComFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankComFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankComLost">通过联系人手机查询非银-代偿类分期高风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankComLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankComLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankComRefuse">通过联系人手机查询非银-代偿类分期拒绝
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankComRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankComRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankCfBad">通过联系人手机查询非银-消费类分期中风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankCfBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankCfBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankCfOverdue">通过联系人手机查询非银-消费类分期一般风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankCfOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankCfOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankCfFraud">通过联系人手机查询非银-消费类分期资信不佳
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankCfFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankCfFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankCfLost">通过联系人手机查询非银-消费类分期高风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankCfLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankCfLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankCfRefuse">通过联系人手机查询非银-消费类分期拒绝
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankCfRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankCfRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankOtherBad">通过联系人手机查询非银-其他中风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankOtherBad === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankOtherBad | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankOtherOverdue">通过联系人手机查询非银-其他一般风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankOtherOverdue === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankOtherOverdue | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankOtherFraud">通过联系人手机查询非银-其他资信不佳
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankOtherFraud === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankOtherFraud | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankOtherLost">通过联系人手机查询非银-其他高风险
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankOtherLost === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankOtherLost | FilterToBR}}</el-tag>
          </span>
        </el-col>
        <el-col :span="8">
          <span v-if="fiskData.riskSlLmCellNbankOtherRefuse">通过联系人手机查询非银-其他拒绝
            <el-tag size="small" :type="fiskData.riskSlLmCellNbankOtherRefuse === '0' ? 'danger' : 'warning'">{{fiskData.riskSlLmCellNbankOtherRefuse | FilterToBR}}</el-tag>
          </span>
        </el-col>
      </el-row>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    fiskData: {
      type: Object,
      default: () => {}
    },
    bairongObj: {
      type: Object,
      default: () => {}
    }
  },
  filters: {
    FilterToBR (value) {
      console.log(value)
      let tempStr = ''
      if (value === '2') {
        tempStr = '二度关系命中'
      }
      if (value === '1') {
        tempStr = '一度关系命中'
      }
      if (value === '0') {
        tempStr = '本人直接命中'
      }
      return tempStr
    }
  }
}
</script>
