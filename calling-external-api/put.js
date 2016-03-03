'use strict';

const API_BASE = 'http://jsonplaceholder.typicode.com/posts';

let request = require('request');

request({
  method: 'PUT',
  url: API_BASE,
  data: {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
  }
}, (err, res, body) => {
  console.log(body, res.statusCode);
});
