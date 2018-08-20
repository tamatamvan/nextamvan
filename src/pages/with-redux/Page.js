import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'
import AddCount from './AddCount'

const WithReduxExamplePage = (({ clockCounter: { title, linkTo, lastUpdate, light } }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={ lastUpdate } light={light} />
      <AddCount />
      <nav>
        <Link href={linkTo}><a>Back to Home</a></Link>
      </nav>
    </div>
  )
})

export default connect(state => state)(WithReduxExamplePage)