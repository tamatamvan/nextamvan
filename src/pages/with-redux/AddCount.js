import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount } from 'store/clock-n-counter/actions'

class AddCount extends Component {
  add = () => {
    this.props.addCount()
  }

  render () {
    const { count } = this.props
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
      `}</style>
        <h1>AddCount: <span>{count}</span></h1>
        <button onClick={this.add}>Add To Count</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ 
  count: state.clockCounter.count
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ 
  addCount
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddCount)
