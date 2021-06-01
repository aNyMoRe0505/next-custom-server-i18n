const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  // How can I integrate custom server with next internationalized routing
  server.get('/a', async (req, res) => {
    console.log('/a route');
    const data = await app.render(req, res, req.path, req.query);
    res.send(data);
  });

  // lead to 404
  server.get('/fr/a', async (req, res) => {
    console.log('/fr/a route');
    const data = await app.render(req, res, req.path, req.query);
    res.send(data);
  });

  server.all('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  });
})
