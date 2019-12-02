import React, { Component } from 'react'
import { connect } from 'react-redux'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        i am List Page
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userLogin
  }
}

export default connect(mapStateToProps)(List)
