import baseApi from '@/api/credit/baseinfo'
import axios from 'axios'
export default {
  beforeMount () {
    let querys = this.$route.query
    console.log(querys)
    if (!querys) {
      this.$message({
        message: '参数不正确',
        type: 'warning'
      })
    }
    // Loading
    // Define Params
    this.params = querys
    // ?signSystem=4b1d2b0b06ad467ac8bfa1174de9207a&appId=fangchunxiao1234&timestamp=20180906133912&idCard=330205199601293313&mobile=15268416427&name=王侃
    // 备用方案二
    // allRequest.forEach((item) => {
    //   this.getRefresh(item)
    // })

    // 备用方案一
    // set function fisk.js request
    let reqArrFun = allRequest.map((item) => {
      return baseApi[item](this.params)
    })
    this.loading.loadingshow = true
    axios.all(reqArrFun)
      .then(axios.spread((...allResonse) => {
        this.loading.loadingshow = false
        // set data
        for (let [i, item] of new Map(allResonse.map((item, i) => [i, item]))) {
          if (item.data.code === 200 && item.data.datas) {
            this.$set(this.fiskData, allRequest[i], item.data.datas)
          } else {
            console.log('interator:' + allRequest[i] + ' msg:' + item.data.message)
          }
        }
      })).catch((error) => {
        console.log(error)
      })
  }
}
