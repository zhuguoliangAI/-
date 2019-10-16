const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// rl.on('line', value => {
//   console.log(parseInt(value));
// });
let res = '';
rl.on('line', value => {
  res = '';
  getResults(value);
  console.log(res);
});
function getResults(num) {
  let i = 2;
  for (; i < num; i++) {
    if (num % i === 0) {
      res += `${i} `;
      getResults(num / i);
      break;
    }
  }
  if (i == num) {
    res += `${i} `;
  }
};
