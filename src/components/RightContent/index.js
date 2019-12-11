import React, { Component } from 'react'
import { Avatar } from 'antd'
import './index.less'

import HeaderSearch from '../HeaderSearch'

class GlobalHeaderRight extends Component {
  render() {
    const { theme, layout } = this.props
    let className = 'right'

    if (theme === 'dark' && layout === 'topmenu') {
      className = `right dark`
    }

    return (
      <div className={className}>
        <HeaderSearch
          className={`action search`}
          placeholder={'input'}
          onSearch={value => {
            console.log('input', value)
          }}
          onPressEnter={value => {
            console.log('enter', value)
          }}
        />
        <Avatar icon='user' style={{ marginRight: 30 }} />
      </div>
    )
  }
}

export default GlobalHeaderRight
