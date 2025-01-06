const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num = String(n).split("");
  let min = num[0];
  for (let i = 1; i < num.length; i++) {
    if(num[i] < min){
      min = num[i];
    } 
  }
  let ind = num.indexOf(min);
  if (num[0] < num[1]) {
    num.splice(0, 1);
  } else num.splice(ind, 1);
  return +num.join('');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
