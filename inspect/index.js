'use strict';

let util = require('util');

let user = Object.freeze({
  name: process.env.USER,
  id: 1e3
});

let config = Object.freeze({
  showHidden: true,
  depth: null
});

console.log(util.inspect(util, config));

// Prints

// { format:
//    { [Function]
//      [length]: 1,
//      [name]: '',
//      [prototype]: { [constructor]: [Circular] } },
//   deprecate:
//    { [Function]
//      [length]: 2,
//      [name]: '',
//      [prototype]: { [constructor]: [Circular] } },
//   debuglog:
//    { [Function]
//      [length]: 1,
//      [name]: '',
//      [prototype]: { [constructor]: [Circular] } },
//   inspect:
//    { [Function: inspect]
//      [length]: 2,
//      [name]: 'inspect',
//      [prototype]: inspect { [constructor]: [Circular] },
//      colors:
//       { bold: [ 1, 22, [length]: 2 ],
//         italic: [ 3, 23, [length]: 2 ],
//         underline: [ 4, 24, [length]: 2 ],
//         inverse: [ 7, 27, [length]: 2 ],
//         white: [ 37, 39, [length]: 2 ],
//         grey: [ 90, 39, [length]: 2 ],
//         black: [ 30, 39, [length]: 2 ],
//         blue: [ 34, 39, [length]: 2 ],
//         cyan: [ 36, 39, [length]: 2 ],
//         green: [ 32, 39, [length]: 2 ],
//         magenta: [ 35, 39, [length]: 2 ],
//         red: [ 31, 39, [length]: 2 ],
//         yellow: [ 33, 39, [length]: 2 ] },
//      styles:
//       { special: 'cyan',
//         number: 'yellow',
//         boolean: 'yellow',
//         undefined: 'grey',
//         null: 'bold',
//         string: 'green',
//         symbol: 'green',
//         date: 'magenta',
//         regexp: 'red' } },
//   isArray: { [Function: isArray] [length]: 1, [name]: 'isArray' },
//   isBoolean:
//    { [Function: isBoolean]
//      [length]: 1,
//      [name]: 'isBoolean',
//      [prototype]: isBoolean { [constructor]: [Circular] } },
//   isNull:
//    { [Function: isNull]
//      [length]: 1,
//      [name]: 'isNull',
//      [prototype]: isNull { [constructor]: [Circular] } },
//   isNullOrUndefined:
//    { [Function: isNullOrUndefined]
//      [length]: 1,
//      [name]: 'isNullOrUndefined',
//      [prototype]: isNullOrUndefined { [constructor]: [Circular] } },
//   isNumber:
//    { [Function: isNumber]
//      [length]: 1,
//      [name]: 'isNumber',
//      [prototype]: isNumber { [constructor]: [Circular] } },
//   isString:
//    { [Function: isString]
//      [length]: 1,
//      [name]: 'isString',
//      [prototype]: isString { [constructor]: [Circular] } },
//   isSymbol:
//    { [Function: isSymbol]
//      [length]: 1,
//      [name]: 'isSymbol',
//      [prototype]: isSymbol { [constructor]: [Circular] } },
//   isUndefined:
//    { [Function: isUndefined]
//      [length]: 1,
//      [name]: 'isUndefined',
//      [prototype]: isUndefined { [constructor]: [Circular] } },
//   isRegExp:
//    { [Function: isRegExp]
//      [length]: 1,
//      [name]: 'isRegExp',
//      [prototype]: isRegExp { [constructor]: [Circular] } },
//   isObject:
//    { [Function: isObject]
//      [length]: 1,
//      [name]: 'isObject',
//      [prototype]: isObject { [constructor]: [Circular] } },
//   isDate:
//    { [Function: isDate]
//      [length]: 1,
//      [name]: 'isDate',
//      [prototype]: isDate { [constructor]: [Circular] } },
//   isError:
//    { [Function: isError]
//      [length]: 1,
//      [name]: 'isError',
//      [prototype]: isError { [constructor]: [Circular] } },
//   isFunction:
//    { [Function: isFunction]
//      [length]: 1,
//      [name]: 'isFunction',
//      [prototype]: isFunction { [constructor]: [Circular] } },
//   isPrimitive:
//    { [Function: isPrimitive]
//      [length]: 1,
//      [name]: 'isPrimitive',
//      [prototype]: isPrimitive { [constructor]: [Circular] } },
//   isBuffer:
//    { [Function: isBuffer]
//      [length]: 1,
//      [name]: 'isBuffer',
//      [prototype]: isBuffer { [constructor]: [Circular] } },
//   log:
//    { [Function]
//      [length]: 0,
//      [name]: '',
//      [prototype]: { [constructor]: [Circular] } },
//   inherits:
//    { [Function]
//      [length]: 2,
//      [name]: '',
//      [prototype]: { [constructor]: [Circular] } },
//   _extend:
//    { [Function]
//      [length]: 2,
//      [name]: '',
//      [prototype]: { [constructor]: [Circular] } },
//   p:
//    { [Function: deprecated]
//      [length]: 0,
//      [name]: 'deprecated',
//      [prototype]: deprecated { [constructor]: [Circular] } },
//   exec:
//    { [Function: deprecated]
//      [length]: 0,
//      [name]: 'deprecated',
//      [prototype]: deprecated { [constructor]: [Circular] } },
//   print:
//    { [Function: deprecated]
//      [length]: 0,
//      [name]: 'deprecated',
//      [prototype]: deprecated { [constructor]: [Circular] } },
//   puts:
//    { [Function: deprecated]
//      [length]: 0,
//      [name]: 'deprecated',
//      [prototype]: deprecated { [constructor]: [Circular] } },
//   debug:
//    { [Function: deprecated]
//      [length]: 0,
//      [name]: 'deprecated',
//      [prototype]: deprecated { [constructor]: [Circular] } },
//   error:
//    { [Function: deprecated]
//      [length]: 0,
//      [name]: 'deprecated',
//      [prototype]: deprecated { [constructor]: [Circular] } },
//   pump:
//    { [Function: deprecated]
//      [length]: 0,
//      [name]: 'deprecated',
//      [prototype]: deprecated { [constructor]: [Circular] } },
//   _errnoException:
//    { [Function]
//      [length]: 3,
//      [name]: '',
//      [prototype]: { [constructor]: [Circular] } },
//   _exceptionWithHostPort:
//    { [Function]
//      [length]: 5,
//      [name]: '',
//      [prototype]: { [constructor]: [Circular] } } }

console.log(util.inspect(user, config));
