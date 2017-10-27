// Import
const express = require('express');
const bodyParser = require('body-parser');
// const axios = require('axios');

const routes = require('./api/routes');

// Server
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', routes);

// Start on :3000
app.listen(3000, () => {
  console.log('App is running');
});
