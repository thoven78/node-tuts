'use strict';
/**
 * load the data
 */
let data = require('../simple-api/data/consumer-data-finance-views.json');

// Here's a simple implementation of map reduce
// We take [{name: 'Some name'}, {'Other name'}] and return [['Some'], ['name'], ['Other'], ['name']]
let scores = data.map((d, index)=> {
  return d.name && d.name.split(/\s/);
})
// We then take [['Some'], ['name'], ['Other'], ['name']] and return
//
.reduce((previous, current) => previous.concat(current))
// Here we will return the data in the following forrmat
// [[text], [number of times were've seen it in the doc]]
.reduce((previous, current) => {
  // Get the index of the current text
  let index = previous[0].indexOf(current);

  if (index === -1) { // we have not seen this text yet so assign one to it
    previous[0].push(current);
    previous[1].push(1);
  } else {
    previous[1][index] += 1; // increment it's count by one
  }

  return previous;
}, [[], []])
// We then transform the data again into the following structure
// [['text', number of times we saw it the doc], ['text', number of times we saw it the doc]]
.reduce((previous, current, index, context) => {
  let zip = [];
  previous.forEach((word, index) => {
    zip.push([word, context[1][index]]);
  });
  return zip;
});

console.log(scores, 'scores');
