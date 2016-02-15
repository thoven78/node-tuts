'use strict';

let fs = require('fs');

let dataTobeSaved = require('./create-data');

dataTobeSaved = JSON.stringify(dataTobeSaved, null, 4);

console.log('Wrote', dataTobeSaved, 'to', 'data.json');
fs.writeFileSync('data.json', dataTobeSaved);

console.log('Reading data.json');

let pData = fs.readFileSync('./data.json');

console.log(JSON.parse(pData));
