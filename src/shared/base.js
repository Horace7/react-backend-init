/* eslint-disable */
let base
const hosts = {
  dev: 'https://qa-fams-api.helixtec.cn',
  test: 'https://qa-fams-api.helixtec.cn',
  prod: 'https://qa-fams-api.helixtec.cn'
}
if (process.env.NODE_ENV === 'production') {
  if (process.env.VUE_APP_FLAG === 'prod') {
    base = hosts.prod
  } else {
    base = hosts.test
  }
} else {
  base = hosts.dev
}
export { base }
