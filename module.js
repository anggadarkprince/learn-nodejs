const { add, subtract } = require('./utilities.js');

console.log(add(1,2)); // 3
console.log(subtract(2,1)); // 1

// the “this” keyword references to the global object.
console.log(this === module.exports); // true


// these codes like inside the function by default
console.log('Hello');
return;
console.log('world!');

/* no error occurred, under the hood node js wrap them into
function (exports, require, module, __filename, __dirname) {
  // code of the module
}
 */