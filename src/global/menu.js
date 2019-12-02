import * as urls from './routepath'
const menuData = [
  {
    path: '/',
    name: '首页',
    icon: 'home',
    exact: false,
  },
  {
    path: urls.LIST,
    name: '列表页',
    icon: 'unordered-list',
    exact: false
  }
]

function formatter(data, parentAuthority) {
  return data.map(item => {
    const result = {
      ...item,
      path: item.path,
      authority: item.authority || parentAuthority,
      key: item.path
    }
    if (item.children) {
      result.children = formatter(item.children, item.authority)
    }
    return result
  })
}

export const getMenuData = () => formatter(menuData)
