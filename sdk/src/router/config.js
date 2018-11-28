const routesList = [
  { path: 'status', title: '认证列表', compath: 'index', children: false },
  { path: 'baseinfo', title: '基本信息', compath: 'baseinfo/index', children: false },
  { path: 'baseinfo', title: '认证照片', compath: 'baseinfo/index', children: false },
  { path: 'emergency', title: '紧急联系人', compath: 'emergency/index', children: false },
  { path: 'identify', title: '身份证验证', compath: 'identify/index', children: false },
  { path: 'identify/setPhoto', title: '身份证验证', compath: 'identify/setPhoto', children: true }
]
export const routePath = 'authentication'
export default {
  routesList,
  routePath
}
