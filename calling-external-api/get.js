'use strict';

let request = require('request');

let stream = require('stream');

let fs = require('fs');

const API_BASE = 'http://jsonplaceholder.typicode.com/posts';

const IMAGE_URL = 'https://www.npmjs.com/static/images/npm-logo.svg';

function parseJson(jsString) {
  let json = [];
  try {
    json = JSON.parse(jsString);
  } catch (e) {
    console.error(e);
  }
  return json;
}


function getJson() {
  request.get(API_BASE, (err, res, body) => {
    if (err) {
      return console.error(err);
    }

    let json = parseJson(body).slice(0, 2);

    for (let js of json) {
      console.log(js);
    }

    let fc = fs.createWriteStream(__dirname + '/images/fc.json');

    fc.write(JSON.stringify(json, null, 4));
  });
}

function getImage() {
  request(IMAGE_URL).pipe(fs.createWriteStream(__dirname + '/images/npm-logo.svg'));
}

let argv = process.argv.slice(3);

argv = (argv || 'json');

if (!argv.length) {
  getJson();
} else {
  getImage();
}
