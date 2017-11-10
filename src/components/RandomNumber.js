import React, { Component } from 'react'
import { connect } from 'react-redux'

import { asyncWait } from '../actions'

class RandomNumber extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.thing}</h1>
        <button onClick={(e) => {
          // dispatch(asyncWait())
          this.props.asyncWait()
        }}>Random</button>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    thing: state.thing
  }
}

const mapDispatchToProps = () => {
  return {
    asyncWait
  }
}

export default connect(mapStateToProps, { asyncWait })(RandomNumber)
