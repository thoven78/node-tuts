'use strict';

/**
 * Using node-debug will let you walk through and inspect
 * the value of i the value
 */

let i = 0;

for(;;) {
  console.log(i);
  ++i;
  if (Math.random() > 0.5) {
    break;
  }
}
console.log("done");
