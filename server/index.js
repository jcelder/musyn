/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');
const score = require('./models/score');
const socket = require('./controllers/sockets');
socket.init(server);

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'public');

app.use('/', express.static(PUBLIC_DIR));

app.get('/api/score', (req, res) => {
  score.get()
    .then((scoreDat) => res.status(200).send(scoreDat))
    .catch((err) => res.status(500).send(err));
});

server.listen(PORT, () => {
  console.log('Server listening on port', 3000);
});
