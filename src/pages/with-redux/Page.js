import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'
import AddCount from './AddCount'

const WithReduxExamplePage = (({ clockCounter: { title, lastUpdate, light } }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={ lastUpdate } light={light} />
      <AddCount />
      <nav>
        <Link href='/'><a>Back to Home</a></Link>
      </nav>
    </div>
  )
})

export default connect(state => state)(WithReduxExamplePage)