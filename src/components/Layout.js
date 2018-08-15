const Layout = ({ children }) => (
  <div>
    <h1>Ini layout</h1>
    { children }

    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Roboto');
      body {
        font-family: 'Roboto', sans-serif;
      }
    `}</style>
  </div>
)

export default Layout