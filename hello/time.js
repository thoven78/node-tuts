'use strict';

console.time('100-elements');

for (let i = 0; i < 100; ++i) {}

console.timeEnd('100-elements');

// Prints 100-elements: 1ms
// NOTE: time taken can be different base on your computer hardware
