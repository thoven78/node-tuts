'use strict';

/**
 * @description A data Object
 * @type {Object}
 */
let data = Object.create(null);
/**
 * @description A list of users
 * @type {Array}
 */
data.users = [];

let iid = 1;

do {
  data.users[iid] = (Math.random() * iid).toString(32);
  ++iid;
} while(iid < 20);

module.exports = data;
