import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        i am home page
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userLogin
  }
}

export default connect(mapStateToProps)(Home)
