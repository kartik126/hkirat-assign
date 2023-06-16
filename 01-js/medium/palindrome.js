/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  
  let string = str.toUpperCase();
  let temp = str.length;

  if (str.includes("" || /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/)) {
    return;
  }
  for (let i = 0; i < temp / 2; i++) {
    if (string[i] !== string[temp - 1 - i]) {
      return;
    }
  }
  return true;
}

module.exports = isPalindrome;
