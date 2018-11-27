import React from 'react'
import { bindActionCreators } from 'redux'
import { startClock, addCount, serverRenderClock } from 'store/clock-n-counter/actions'
import { connect } from 'react-redux'
import Page from './Page'

class Counter extends React.Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer }
  }

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Page title='Index Page' linkTo='/' />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addCount,
  startClock
}, dispatch)

export default connect(null, mapDispatchToProps)(Counter)