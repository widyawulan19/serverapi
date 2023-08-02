const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const app = express();
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

// Use the json-server routes as middleware in the express app
app.use('/api', server);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
