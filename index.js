const express = require('express')
const next = require('next')

const { NODE_ENV, PORT } = process.env

const port = parseInt(PORT, 10) || 3000
const dev = NODE_ENV != 'production' // checking for dev mode

const app = next({ 
  dev,
  dir: './src'
}) //running next with dev mode
const handle = app.getRequestHandler()

const renderPage = async (req, res, pagePath, queryParams) => {

  try {
    // rendering page to HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams)
    
    // If something's wrong, don't cache the HTML
    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    res.send(html)

  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}

app.prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`${ dev ? 'non' : '' } production mode > Ready on http://localhost:${port}`)
    })
  })
