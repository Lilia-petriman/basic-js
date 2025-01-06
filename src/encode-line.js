const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let numberChar = 1;
  let codeStr = '';
  for (let i = 0; i < str.length; i++) {
     if(str[i] === str[i+1]){
      numberChar +=1;
     }
     else if((str[i] !== str[i+1]) && numberChar > 1){
      codeStr += numberChar + str[i];
      numberChar = 1;
     }
     else if((str[i] !== str[i+1]) && numberChar === 1){
      codeStr += str[i];
      numberChar = 1;
     }
  }
  return codeStr;
}

module.exports = {
  encodeLine
};
