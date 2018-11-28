import moment from 'moment'
import fiskMeta from '@/metadata/fisk'

const FilterTime = (value, format = 'YYYY-MM-DD') => {
  let momentObj = moment(value)
  if (value && momentObj['_isValid']) {
    return momentObj.format(format)
  }
  return value
}
const FilterToFisk = (value, type) => {
  if (typeof value !== 'undefined') {
    let str = ''
    let mlist = fiskMeta[type]
    let arr = mlist.filter((item) => {
      return item.value === value
    })
    if (arr.length > 0) {
      str = arr[0].name
    } else {
      str = ''
    }
    return str
  }
}
const FilterToMinit = (value) => {
  if (value) {
    return (value / 60).toFixed(2)
  }
  return value
}
export default {
  FilterTime,
  FilterToFisk,
  FilterToMinit
}
