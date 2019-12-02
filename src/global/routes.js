// import { Redirect } from 'react-router-dom'
import * as urls from './routepath'
import Home from '../pages/home'
import List from '../pages/list'
import Login from '../pages/login'

const routes = [
  {
    path: urls.HOME,
    name: 'home',
    exact: true,
    component: Home,
    breadcrumbName: '首页',
  },
  {
    path: urls.LIST,
    name: 'list',
    exact: true,
    component: List,
    breadcrumbName: '列表页',
  },
  {
    path: urls.LOGIN,
    name: 'login',
    exact: true,
    componentLayout: 'UserLayout',
    component: Login,
    breadcrumbName: '登录页',
  },
]

export default routes
