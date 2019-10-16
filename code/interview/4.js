const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let input = [];
let obj = {};
rl.on('line', value => {
  input.push(value);
  count = input[0];
  if (input.length - 1 == count) {
    rl.close();
  }
});

rl.on('close', () => {
  for (let i = 1; i < input.length; i++) {
    let arr = input[i].split(' ');
    if (obj[arr[0]]) {
      obj[arr[0]] += Number(arr[1]);
    } else {
      obj[arr[0]] = Number(arr[1]);
    }
  }
  Object.keys(obj).sort((a, b) => a - b).forEach(key => {
    console.log(`${key} ${obj[key]}`);
  })
});

