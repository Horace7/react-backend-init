/* eslint-disable */
import React from 'react'
import { render } from 'react-dom'
import { LocaleProvider, Icon } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import './index.css'
import * as serviceWorker from './serviceWorker'
import configureStore from './global/configStore'
import * as urls from './global/routepath'
import routes from './global/routes'
import RightContent from './components/RightContent'

import Login from './pages/login'
import BasicLayout, {PageHeaderWrapper} from '@ant-design/pro-layout';
import {getMenuData} from "./global/menu";

const history = createBrowserHistory()
const store = configureStore({}, history)

const verifyUser = (route, index) => {
  // let user = localStorage.getItem('user')
  let user = { accessToken: '123'}
  if (user && user.accessToken) {
    return (
      <BasicLayout
        title={'React-Web-Back'}
        navTheme='light'
        breadcrumbRender={(routers = []) => {
          return [
            ...routers,
          ];
        }}
        rightContentRender={rightProps => <RightContent {...rightProps} />}
        menuDataRender={() => getMenuData()}
        menuItemRender={(menuItemProps, defaultDom) => {
          return <Link to={menuItemProps.path}><Icon type={ menuItemProps.icon } />{defaultDom}</Link>
        }}
      >
        <Route key={index} path={route.path} exact={route.exact} component={route.component} />
      </BasicLayout>
    )
  } else {
    return (<Redirect to={urls.LOGIN} />)
  }
}

render(
  <LocaleProvider locale={zhCN}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {routes.map((route, index) => {
            if (route.componentLayout === 'UserLayout') {
              return (
                <Route
                  key='login'
                  path={urls.LOGIN}
                  component={Login}
                />
              )
            } else {
              return (
                <Route key={index} path={route.path} exact={route.exact} component={() => verifyUser(route)} />
              )
            }
          })}
        </ConnectedRouter>
      </Provider>
  </LocaleProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
