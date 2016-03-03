'use strict';

const API_BASE = 'http://jsonplaceholder.typicode.com/posts';

let request = require('request');

request({
  method: 'POST',
  url: API_BASE,
  data: {
    title: 'foo',
    body: 'bar',
    userId: 1
  }
}, (err, req, body) => {
  console.log(body);
});
