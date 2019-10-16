// let Promise = require('./promise');

let p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    Math.random()<0.5?resolve(100):resolve(-100);
  }, 1000)
});

// let test = (resolve, reject) => {
//   setTimeout(() => {
//     Math.random()<0.5?resolve(100):reject(-100);
//   }, 1000)
// };
new Promise((resolve, reject) => {
  resolve(2);
}).then(result => {

})

p1.then(res => {
  console.log(res);
}, err => {
  console.log(err);
});


new Promise((resolve, reject) => {

}).then();


