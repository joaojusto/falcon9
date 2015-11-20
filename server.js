'use strict';
let pg = require('pg');
let express = require('express');
let settings = require('./settings');

let app = express();
let dbClient = new pg.Client(settings.pg.connectionString);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

let server = app.listen(settings.port, () => {
  console.log(`Server listening on port ${server.address().port}`);
  console.log(dbClient.connectionParameters);
});
