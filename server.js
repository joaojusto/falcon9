'use strict';
let express = require('express');
let settings = require('./settings');
let app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

let server = app.listen(settings.port, () => {
  console.log(`Server listening on port ${server.address().port}`);
});
