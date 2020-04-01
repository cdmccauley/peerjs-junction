/*
running locally with 'heroku local web'
*/

'use strict';

const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();

const PORT = process.env.PORT || 3000;

// app.get('/', (req, res, next) => res.send('Hello world!'));
app.use(express.static('public'));

const server = app.listen(PORT, () => console.log('listening on port: ', PORT));

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/'
});

app.use('/server', peerServer);
