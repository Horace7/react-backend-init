import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  login = () => {
    console.log('click login')
  }

  render() {
    return (
      <Button
        onClick={this.login}
      >
        登&nbsp;&nbsp;录
      </Button>
    )
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userLogin
  }
}

export default connect(mapStateToProps)(Login)
