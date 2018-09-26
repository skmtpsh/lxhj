const devConfig = {
  // 开发环境后端服务路径
  BASE_API: 'http://58.56.160.126:18080/api/v2/'
}

const proConfig = {
  // 正式环境后端服务路径
  // BASE_API: 'http://58.56.160.126:18080/api/v2/'
  BASE_API: 'http://api.pursedada.com/api/v2/'
}

let currentConfig = process.env.NODE_ENV === 'development' ? devConfig : proConfig
export default currentConfig
