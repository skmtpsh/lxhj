<template>
  <div>
    <dl class="cardinfo">
      <dt>
        <el-row :gutter="60">
          <el-col :span="6"><span>风险结果：</span><b>{{tongdunObj.riskAntifraud.riskFinalDecision | FilterToFisk('riskDecision') }}</b></el-col>
          <el-col :span="6"><span>风险分数：</span><b>{{tongdunObj.riskAntifraud.riskFinalScore}}</b></el-col>
        </el-row>
      </dt>
      <dt>风险详情</dt>
    </dl>
    <dl class="cardinfo" v-for="(item, index) in tongdunObj.riskAntifraud.riskItems" :key="index">
      <dd>
        <el-row :gutter="60">
          <el-col :span="12"><span>检查项名称：</span><b>{{item.riskName}}</b></el-col>
          <el-col :span="12"><span>风险分数：</span><b>{{item.riskScore}}</b></el-col>
        </el-row>
        <el-row :gutter="60">
          <el-col :span="24"><span>风险详情：</span></el-col>
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'frequency_detail'">
          <el-col :span="24" v-for="(itemchild, index) in item.riskDetail[0].riskFrequencyDetailList" :key="index">
              <b>关联数据列表: </b>{{itemchild.riskData}}
              ,<b>规则命中基本详情: </b>{{itemchild.riskDetail}}
          </el-col>
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'platform_detail'" >
          <el-col :span="6"><b>关联多平台个数：</b>{{item.riskDetail[0].riskPlatformCount}}</el-col>
          <el-col :span="7"><b>各维度关联多平台：</b>
            <div v-for="(itemchild, index) in item.riskDetail[0].riskPlatformDetail" :key="index">
                <span>个数：</span> <b>{{itemchild.riskCount}}</b> ,<span>行业名称: </span> <b>{{itemchild.riskIndustryDisplayName}}</b>
            </div>
          </el-col>
          <el-col :span="11"><b>不分维度关联多平台:</b>
            <div style="margin:10px 0;" v-for="(itemchild, index) in item.riskDetail[0].riskPlatformDetailDimension" :key="index">
                <el-alert
                  :title="'个数：' + itemchild.riskCount + '，维度名称：' + itemchild.riskDimension"
                  type="info"
                  :closable="false">
                  <!-- <b>个数：{{itemchild.riskCount}}，维度名称：{{itemchild.riskDimension}}</b> -->
                  <ul style="font-size: 12px; color: #232323;" v-for="(itemchildchild, index) in itemchild.riskDetail" :key="index">
                    <li>个数：{{itemchildchild.riskCount}}，维度名称：{{itemchildchild.riskIndustryDisplayName}}</li>
                  </ul>
                </el-alert>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'suspected_team'">
          <el-col :span="24" v-for="(itemchild, index) in item.riskDetail[0].riskSuspectTeamDetailList" :key="index">
            <table class="table table-bordered">
              <thead>
              <tr>
                <th>匹配字段名称</th>
                <th>匹配字段值</th>
                <th>疑似风险群体编号</th>
                <th>疑似风险群体成员数</th>
                <th>风险名单成员数</th>
                <th>关注名单成员数</th>
                <th>成员分布</th>
                <th>风险名单分布</th>
                <th>风险名单占比</th>
                <th>关注名单占比</th>
                <th>一度关联节点个数</th>
                <th>二度关联节点个数</th>
                <th>一度风险名单个数</th>
                <th>一度风险名单分布</th>
                <th>二度风险名单个数</th>
                <th>二度风险名单分布</th>
                <th>风险节点距离</th>
                <th>核心节点距离</th>
                <th>关联风险分</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{{itemchild.riskDimType}}</td>
                <td>{{itemchild.riskDimValue}}</td>
                <td>{{itemchild.riskGroupId}}</td>
                <td>{{itemchild.riskTotalCnt}}</td>
                <td>{{itemchild.riskBlackCnt}}</td>
                <td>{{itemchild.riskGreyCnt}}</td>
                <td>{{itemchild.riskNodeDist}}</td>
                <td>{{itemchild.riskFraudDist}}</td>
                <td>{{itemchild.riskBlackRat}}</td>
                <td>{{itemchild.riskGreyRat}}</td>
                <td>{{itemchild.riskDegree}}</td>
                <td>{{itemchild.riskTotalCntTwo}}</td>
                <td>{{itemchild.riskBlackCntOne}}</td>
                <td>{{itemchild.riskFraudDistOne}}</td>
                <td>{{itemchild.riskBlackCntTwo}}</td>
                <td>{{itemchild.riskFraudDistTwo}}</td>
                <td>{{itemchild.riskBlackDst}}</td>
                <td>{{itemchild.riskCoreDst}}</td>
                <td>{{itemchild.riskNodeScore}}</td>
              </tr>
              </tbody>
            </table>
          </el-col>
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'grey_list'">
          <el-col :span="6"><b>描述:</b>{{item.riskDetail[0].riskDescription}}</el-col>
          <el-col :span="6"><b>匹配类型:</b>{{item.riskDetail[0].riskHitTypeDisplayName}}</el-col>
          <el-col :span="12"><b>风险类型显示名:</b>{{item.riskDetail[0].riskFraudTypeDisplayName}}</el-col>
          <el-col :span="24"><span>关注名单细则：</span></el-col>
          <el-col :span="24">
            <table class="table table-bordered">
              <thead>
              <tr>
                <th>命中关注名单的属性值</th>
                <th>风险类型显示名</th>
                <th>风险等级</th>
                <th>风险类型</th>
                <th>证据时间戳形式</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(itemchild, index) in item.riskDetail[0].riskGreyListDetails" :key="index">
                <td>{{itemchild.riskValue}}</td>
                <td>{{itemchild.riskFraudTypeDisplayName}}</td>
                <td>{{itemchild.riskLevel}}</td>
                <td>{{itemchild.riskFraudType}}</td>
                <td>{{itemchild.riskEvidenceTime | FilterTime}}</td>
              </tr>
              </tbody>
            </table>
          </el-col>
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'black_list'">
          <el-col :span="6"><b>描述:</b>{{item.riskDetail[0].riskDescription}}</el-col>
          <el-col :span="6"><b>匹配类型:</b>{{item.riskDetail[0].riskHitTypeDisplayName}}</el-col>
          <el-col :span="12"><b>风险类型显示名:</b>{{item.riskDetail[0].riskFraudTypeDisplayName}}</el-col>
          <el-col :span="24"><span>法院细则表：</span></el-col>
          <el-col :span="24">
            <table class="table table-bordered">
              <thead>
              <tr>
                <th>案号</th>
                <th>执行法院</th>
                <th>立案时间</th>
                <th>性别</th>
                <th>被执行人履行情况</th>
                <th>被执行人姓名</th>
                <th>风险类型</th>
                <th>被执行人行为具体情形</th>
                <th>执行标的</th>
                <th>执行状态</th>
                <th>做出依据执行法院</th>
                <th>生效法律文书确定的义务</th>
                <th>省份</th>
                <th>执行依据文号</th>
                <th>命中的属性值</th>
                <th>年龄</th>
                <th>证据时间戳形式</th>
                <th>风险类型显示名</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(itemchild, index) in item.riskDetail[0].riskCourtDetails" :key="index">
                <td>{{itemchild.riskCaseCode}}</td>
                <td>{{itemchild.riskExecuteCourt}}</td>
                <td>{{itemchild.riskCaseDate}}</td>
                <td>{{itemchild.riskGender}}</td>
                <td>{{itemchild.riskCarryOut}}</td>
                <td>{{itemchild.riskExecutedName}}</td>
                <td>{{itemchild.riskFraudType}}</td>
                <td>{{itemchild.riskSpecificCircumstances}}</td>
                <td>{{itemchild.riskExecuteSubject}}</td>
                <td>{{itemchild.riskExecuteStatus}}</td>
                <td>{{itemchild.riskEvidenceCourt}}</td>
                <td>{{itemchild.riskTermDuty}}</td>
                <td>{{itemchild.riskProvince}}</td>
                <td>{{itemchild.riskExecuteCode}}</td>
                <td>{{itemchild.riskValue}}</td>
                <td>{{itemchild.riskAge}}</td>
                <td>{{itemchild.riskEvidenceTime}}</td>
                <td>{{itemchild.riskFraudTypeDisplayName}}</td>
              </tr>
              </tbody>
            </table>
          </el-col>
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'fuzzy_black_list'">
          <el-col :span="12"><b>规则描述:</b>{{item.riskDetail[0].riskDescription}}</el-col>
          <el-col :span="12"><b>风险类型显示名:</b>{{item.riskDetail[0].riskFraudTypeDisplayName}}</el-col>
          <el-col :span="24"><span>模模糊证据库细则：</span></el-col>
          <el-col :span="24">
            <table class="table table-bordered">
              <thead>
              <tr>
                <th>风险类型显示名</th>
                <th>模糊身份证</th>
                <th>模糊姓名</th>
                <th>风险类型</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(itemchild, index) in item.riskDetail[0].riskFuzzyListDetails" :key="index">
                <td>{{itemchild.riskFraudTypeDisplayName}}</td>
                <td>{{itemchild.riskFuzzyIdNumber}}</td>
                <td>{{itemchild.riskFuzzyName}}</td>
                <td>{{itemchild.riskFraudType}}</td>
              </tr>
              </tbody>
            </table>
          </el-col>
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'discredit_count'">
          <el-col :span="6"><b>规则描述:</b>{{item.riskDetail[0].riskDescription}}</el-col>
          <el-col :span="6"><b>信贷逾期次数:</b>{{item.riskDetail[0].riskDiscreditTimes}}</el-col>
          <el-col :span="6"><b>平台个数:</b>{{item.riskDetail[0].riskPlatformCount}}</el-col>
          <el-col :span="24"><span>信贷逾期统计细则表：</span></el-col>
          <el-col :span="24">
            <table class="table table-bordered">
              <thead>
              <tr>
                <th>逾期金额区间</th>
                <th>逾期笔数</th>
                <th>逾期时间区间</th>
                <th>逾期入库时间</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(itemchild, index) in item.riskDetail[0].riskOverdueDetails" :key="index">
                <td>{{itemchild.riskOverdueAmountRange}}</td>
                <td>{{itemchild.riskOverdueCount}}</td>
                <td>{{itemchild.riskOverdueDayRange}}</td>
                <td>{{itemchild.riskOverdueTime}}</td>
              </tr>
              </tbody>
            </table>
          </el-col>
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'cross_frequency_detail'">
          <el-col :span="24" v-for="(itemchild, index) in item.riskDetail[0].riskCrossFrequencyDetailList" :key="index">
              <b>关联数据列表: </b>{{itemchild.riskData}}
              ,<b>规则命中基本详情: </b>{{itemchild.riskDetail}}
          </el-col>
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'function_kit'">
          <el-col :span="24"><span>计算结果：</span>{{item.riskDetail[0].riskResult}}</el-col>
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'cross_event_detail'">
          <el-col :span="24" v-for="(itemchild, index) in item.riskDetail[0].riskCrossEventDetailList" :key="index">
              <b>跨事件字段细则: </b>{{itemchild.riskDetail}}
          </el-col>
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'custom_list'">
          <el-col :span="24"><b>描述: </b> {{item.riskDetail[0].riskDescription}}</el-col>
          <el-col :span="24"><b>高风险区域: </b> {{item.riskDetail[0].riskHighRiskAreas}}</el-col>
          <el-col :span="24"><b>列表数据: </b> {{item.riskDetail[0].riskHitListDatas}}</el-col>
          <!-- <el-col :span="24">
              <span v-for="(itemchild, index) in item.riskDetail[0].riskHitListDatas" :key="index">{{itemchild}}</span>
          </el-col> -->
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'device_status_abnormal'">
          <el-col :span="24"><b>设备状态异常集合: </b>
            [<span v-for="(itemtag, index) in item.riskDetail[0].riskAbnormalTags" :key="index">
              <b v-if="itemtag==='AbnormalTime'">本机时间异常</b>
              <b v-if="itemtag==='SuspectedOfWipingPhone'">疑似刷机</b>
              <b v-if="itemtag==='ShortUptime'">开机时间过短</b>
              <b v-if="itemtag==='DeviceFirstSeen'">设备首次出现</b>
              <b v-if="itemtag==='AbnormalCarrierInfo'">运营商异常</b>
              <b v-if="itemtag==='AbnormalNetworkConnection'">网络信息异常</b>
              <b v-if="itemtag==='IllegalClientid'">客户端ID异常</b>
              <b v-if="itemtag==='AndroidEmulator'">设备为模拟器</b>
              <b v-if="itemtag==='MultipleRunning'">多开</b>
              <b v-if="itemtag==='DebuggerDetected'">设备参数被篡改</b>
              <b v-if="itemtag==='SuspectedOfFakingLocation'">疑似伪造基站定位</b>
              <b v-if="itemtag==='SuspectedOfFakingWifi'">疑似伪造无线网络信息</b>
            </span>]
          </el-col>
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'fp_exception'">
          <el-col :span="6">
            <b>异常代码: </b>{{item.riskDetail[0].riskCode}}
          </el-col>
          <el-col :span="6">
            <b>异常代码的显示名: </b>{{item.riskDetail[0].riskCodeDisplayName}}
          </el-col>
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'android_emulator'">
          <el-col :span="24"><b>模拟器名称: </b> {{item.riskDetail[0].riskEmulatorType}}</el-col>
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'android_cheat_app'">
          <el-col :span="8"><b>作弊器内容1: </b> {{item.riskDetail[0].riskHookMethod}}</el-col>
          <el-col :span="8"><b>作弊器内容2: </b> {{item.riskDetail[0].riskHookInline}}</el-col>
          <el-col :span="8"><b>作弊器内容3: </b> {{item.riskDetail[0].riskHookAddress}}</el-col>
        </el-row>
        <el-row :gutter="60" v-if="item.riskDetail.length > 0&&item.riskDetail[0].riskType === 'creditList_index_detail'">
          <el-col :span="6"><b>匹配字段: </b> {{item.riskDetail[0].riskDimType}}</el-col>
          <el-col :span="6"><b>计算结果: </b> {{item.riskDetail[0].riskResult}}</el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6"></el-col>
          <el-col :span="24"><b>名单指标细则: </b> </el-col>
          <el-col :span="24">
            <table class="table table-bordered">
              <thead>
              <tr>
                <th>风险类型</th>
                <th>风险时间</th>
                <th>逾期金额</th>
                <th>逾期天数</th>
                <th>来源行业</th>
                <th>主体类型</th>
                <th>角色</th>
                <th>被执行人姓名 </th>
                <th>性别</th>
                <th>省份</th>
                <th>案号</th>
                <th>立案时间</th>
                <th>案件状态</th>
                <th>执行法院</th>
                <th>执行依据文号</th>
                <th>生效法律文书确定的义务</th>
                <th>做出执行依据单位</th>
                <th>失信被执行人行为具体情形</th>
                <th>被执行人的履行情况</th>
                <th>裁判文书</th>
                <th>执行标的</th>
                <th>案件类型</th>
                <th>案件性质</th>
                <th>欠税金额</th>
                <th>税费种</th>
                <th>风险拒绝次数</th>
                <th>相关风险类型</th>
                <th>风险亲密度等级</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(itemchild, index) in item.riskDetail[0].riskHits" :key="index">
                <td>{{itemchild.riskType}}</td>
                <td>{{itemchild.riskEvidenceTime}}</td>
                <td>{{itemchild.riskOverdueAmount}}</td>
                <td>{{itemchild.riskOverdueCounts}}</td>
                <td>{{itemchild.riskOverdueDays}}</td>
                <td>{{itemchild.riskIndustry}}</td>
                <td>{{itemchild.riskSubjectType}}</td>
                <td>{{itemchild.riskRole}}</td>
                <td>{{itemchild.riskName}}</td>
                <td>{{itemchild.riskSex}}</td>
                <td>{{itemchild.riskProvince}}</td>
                <td>{{itemchild.riskCaseNo}}</td>
                <td>{{itemchild.riskCaseCreateDate}}</td>
                <td>{{itemchild.riskCaseStatus}}</td>
                <td>{{itemchild.riskCourtName}}</td>
                <td>{{itemchild.riskGistId}}</td>
                <td>{{itemchild.riskJudgmentDuty}}</td>
                <td>{{itemchild.riskGistUnit}}</td>
                <td>{{itemchild.riskDisruptTypeName}}</td>
                <td>{{itemchild.riskPerformance}}</td>
                <td>{{itemchild.riskJudgmentDoc}}</td>
                <td>{{itemchild.riskExecAmount}}</td>
                <td>{{itemchild.riskCaseType}}</td>
                <td>{{itemchild.riskCaseCharacter}}</td>
                <td>{{itemchild.riskOweTaxAmount}}</td>
                <td>{{itemchild.riskTaxType}}</td>
                <td>{{itemchild.riskRejectCounts}}</td>
                <td>{{itemchild.riskRelatedRiskType}}</td>
                <td>{{itemchild.riskRelatedChainScore}}</td>
              </tr>
              </tbody>
            </table>
          </el-col>
        </el-row>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: {
    tongdunObj: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
