const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let arr = [];
let result = [];
rl.on('line', value => {
  count++;
  arr.push(value);
  if (count === 2) {
    arr.forEach(value => {
      if (value.length === 8) {
        result.push(value);
      } else if (value.length < 8) {
        let temp = new Array(8-value.length).fill(0);
        let newArr = Array.from(value);
        newArr.splice(value.length, 0, ...temp);
        result.push(newArr.reduce((pre, cur) => pre + cur, ''));
      } else if (value.length > 8) {
        //
        let newArr = Array.from(value);
        while(newArr.length / 8 >= 1) {
          result.push(newArr.splice(0, 8).reduce((pre, cur) => pre + cur, ''));
        }
        if (newArr.length > 0) {
          let temp = new Array(8-newArr.length).fill(0);
          newArr.splice(newArr.length, 0, ...temp);
          result.push(newArr.reduce((pre, cur) => pre + cur, ''));
        }
      }
    });
    result.forEach(value => console.log(value));
    count = 0;
    arr = [];
    result = [];
  }
});



var io = new IntersectionObserver(entries => {
  console.log(entries);
  io.disconnect();
}, {
  root: document.querySelector('.parent'),
  threshold: [0, 0.5, 1],
  rootMargin: '30px 20px 20px '
});

io.observe(document.querySelector('.child'));
