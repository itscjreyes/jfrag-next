const next = require('next')
const express = require('express')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = 3000

app.prepare().then(() => {
  const server = express()

  // server.get('/posts', (req, res) => {
  //   return app.render(req, res, '/index', { slug: req.params.slug })
  // })

  // server.get('/posts/:slug', (req, res) => {
  //   return app.render(req, res, '/post', { slug: req.params.slug })
  // })

  server.get('/podcast/:slug', (req, res) => {
    return app.render(req, res, '/podcast-single', { slug: req.params.slug })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})