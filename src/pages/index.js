const Index = () => (
  <div id="homepage">
    <img src="/static/images/Programmer-cat.jpg"
      alt="I want to change the world"
      className="img-fluid"
      />
    <h1>Welcome to Nextamvan</h1>
    <h2>A simple next.js boilerplate for your application</h2>

    <style jsx>{`
      #homepage {
        padding: 3em;
        text-align: center;
        h1, h2 {
          font-style: italic;
        }
      }
    `}</style>
  </div>
)

export default Index
