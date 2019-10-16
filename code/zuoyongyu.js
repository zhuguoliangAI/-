// 作用域
// var a = 2;
// function f() {
//     var a = 3;
//     console.log(a);
// }
// f();
// console.log(a);


// function foo(a) {
//     var b = 2;
//     // .....
//     function bar() {
//         // ...
//         console.log(b)
//     }
//     var c = 3;
//     bar()
// }
// var b = 3;
// foo(b);
// console.log(b)

// 作用域隐藏
// function dosomething(a) {
//     b = a + doSomethingElse(a * 2);
//     console.log(b * 3);
// }
//
// function doSomethingElse(a) {
//     return a - 1;
// }
// var b;
// doSomething( 2 ); // 15
//
//
// function doSomething(a) {
//     function doSomethingElse(a) {
//         return a - 1;
//     }
//     var b;
//     b = a + doSomethingElse( a * 2 );
//     console.log( b * 3 );
// }
// doSomething( 2 ); // 15

// var a = [{a: 123, b: 345}];
//
// a.map(({a, b, c = 10}) => {
//   console.log(a, b, c);
// })

function recursiveClone(val) {
  return Array.isArray(val) ? Array.from(val, recursiveClone) : val;
}

function flatArray(ary) {
  while (ary.some(Array.isArray)) {
    ary = [].concat(...ary);
  }
  return ary;
}

let ary = [1, [2, 3], 6];
let newArray = flatArray(ary);
console.log(newArray);


new Promise((resolve, reject) => {
  resolve();
}).then()
