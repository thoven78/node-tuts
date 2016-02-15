'use strict';

let express = require('express');

let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use('/api/v1', require('./routes'));

const PORT = 8080;

app.listen(PORT, () => console.log('Server is listening on PORT %d', PORT));
