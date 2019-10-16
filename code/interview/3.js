const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', value => {
  console.log(Math.round(value))
});
