'use strict';

/**
 * For more info on how to use node debugger
 * See https://nodejs.org/api/debugger.html
 */

setTimeout(() => {
 /*jshint -W087*/
 debugger;

 console.log('world');

}, 500);

console.log('hello');
