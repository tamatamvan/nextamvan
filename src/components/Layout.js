import bsstyle from '../styles/bs.scss'

const Layout = ({ children }) => (
  <div>
    <h1>Ini layout</h1>
    { children }
    <button className="btn btn-lg btn-primary">Hore</button>

    <style jsx global>{ bsstyle }</style>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Roboto');
      body {
        font-family: 'Roboto', sans-serif;
        color: $blue;
      }
    `}</style>
  </div>
)

export default Layout