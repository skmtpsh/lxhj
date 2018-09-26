export function checkTel (tel, obj) {
  let regTel = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[789])\d{8}$/
  if (!regTel.test(tel)) {
    obj.$vux.toast.text('输入正确的手机号格式', 'middle')
    return false
  }
}
export function checkPwd (pwd, obj) {
  let regPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
  if (!regPwd.test(pwd)) {
    obj.$vux.toast.text('6-12位字母加数字组合', 'middle')
    return false
  }
}
