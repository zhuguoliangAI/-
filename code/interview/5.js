// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// [1,2].reverse()
//
// rl.on('line', value => {
//   let res = Array.from(new Set(Array.from(value).reverse())).reduce((pre, cur) => pre + cur, '');
//   console.log(res);
// });

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', value => {
  let arr = value.split(' ');
  console.log(Array.from(arr).reverse().join(' '));
});
