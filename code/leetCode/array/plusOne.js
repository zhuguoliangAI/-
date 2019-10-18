/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//   let num = Number(digits.reduce((pre, cur) => pre + cur, ''));
//   num++;
//   // console.log(Array.from(num.toString()));
//   return Array.from(num.toString());
// };


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let length = digits.length;
  let first = digits[0];
  while (length - 1 >= 0) {
    if (digits[length - 1] == 9) {
      digits[length - 1] = 0;
      length--;
    } else {
      digits[length - 1] = digits[length - 1] + 1;
      console.log(digits);
      return digits;
    }
  }
  if (first == 9) {
    digits = new Array(digits.length + 1).fill(0);
    digits[0] = 1;
    console.log(digits);
    return digits;
  }
};


plusOne([9]);
