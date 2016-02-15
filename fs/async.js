let fs = require('fs');

let dataTobeSaved = require('./create-data');

dataTobeSaved = JSON.stringify(dataTobeSaved, null, 4);

/**
 * @description Reads a given json file
 * @param  {String}   fileName the file to read
 * @param  {Function} callback the callback to be called once the operation is done or encounter an error
 */
function readJSON(fileName, callback) {
  fileName = (fileName || './data.json');
  fs.readFile(fileName, (err, data) => {
    if (err) {
      throw new Error(err);
    }

    try {
      data = JSON.parse(data);
      callback(null, data);
    } catch (e) {
      callback(e);
    }
  });
}

/**
 * @description Writes a file asynchronously
 * @param  {(Object|String)}   dt the data to be written
 * @param  {String}   fileName name of the file where
 * @param  {Function} callback a callback to be called after the operation was success full or encountered an error
 */
function writeFile(dt, fileName, callback) {
  fileName = (fileName || './data.json');
  fs.writeFile(fileName, dt, (err) => {
    if (err) {
      callback(new Error(err));
    }
    callback();
    console.log('Data saved Succesfully');
  });
}

// Here we write a file and then read the data
writeFile(dataTobeSaved, 'data.json', (err) => {
  if (err) {
    return console.error(err);
  }
  // Read the file we just wrote
  readJSON(null, (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log(JSON.parse(data));
  });
});
