import React, { Component } from 'react'
import { connect } from 'react-redux'

class List extends Component {
  constructor(props:any) {
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

const mapStateToProps = (state:any) => {
  return {
    userInfo: state.userLogin
  }
}

export default connect(mapStateToProps)(List)
