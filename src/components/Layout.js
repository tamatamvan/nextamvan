import Navbar from 'components/Navbar'
const Layout = ({ children }) => (
  <div>
    <Navbar/>
    { children }
    
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