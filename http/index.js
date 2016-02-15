'use strict';

let http = require('http');

const PORT = 8080;

http.createServer((request, response)=> {

  request.on('error', (err)=> {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });

  if (request.method === 'POST' && request.url === '/pipe') {
    let body = [];
    request.on('data', (chunk)=> {
      body.push(chunk);
    }).on('end', ()=> {
      body = Buffer.concat(body).toString();
      response.end(body);
    });
  } else {
    response.statusCode = 404;
    response.end('Not Found!');
  }

}).listen(PORT, ()=> console.log('Serve is listening on PORT %d', PORT));
