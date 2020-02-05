/* eslint-disable */
let baseUrl
const hosts = {
  dev: 'https://qa-fams-api.helixtec.cn',
  test: 'https://qa-fams-api.helixtec.cn',
  prod: 'https://qa-fams-api.helixtec.cn'
}
if (process.env.NODE_ENV === 'production') {
  if (process.env.VUE_APP_FLAG === 'prod') {
    baseUrl = hosts.prod
  } else {
    baseUrl = hosts.test
  }
} else {
  baseUrl = hosts.dev
}
export { baseUrl }
