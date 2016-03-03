'use strict';

const API_BASE = 'http://jsonplaceholder.typicode.com/posts';

let request = require('request');

request({
  method: 'DELETE',
  url: API_BASE + '/1'
}, (err, res, body) => {
  console.log(res.statusCode, body);
});
