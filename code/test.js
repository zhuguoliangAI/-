// 面试题记录
// var funcs = []
//     for (var i = 0; i < 10; i++) {
//         funcs.push(function() { console.log(i) })
//     }
//     funcs.forEach(function(func) {
//         // func();
//         console.log(func.toString()) // 10个10
//     })


// 如何才能输出0-9？
// ES5 用闭包实现
// var funcs = [];
// for (var i = 0; i < 10; i++) {
// 	funcs.push( (function(value) {
// 		return function() {
// 			console.log(value); // 0-9
// 		}
// 	})(i))
// }
// funcs.forEach(function(func) {
//         func();   
//     })

// ES6实现 只需要将var改为let就ok了

// if('0'){
// 	console.log('adsad');
// }

// ES6 ... 语法 可以用于数组、对象等拼接、合并等操作
// const number = [1,2,3,4,5]
//     const [first,second, ...rest] = number;
//     console.log() //2,3,4,5

// setTimeout(function() {
//       console.log(1)
//     }, 0);
// new Promise(function executor(resolve) {
//       console.log(2);
//       for( var i=0 ; i<10000 ; i++ ) {
//         i == 9999 && resolve();
//       }
//       console.log(3);
//     }).then(function() {
//       console.log(4);
//     });
// console.log(5);

// new Promise(function(resolve, reject){
// 	console.log('1')
//     resolve(2)
// }).then(function(value){
//     console.log(value) //5
// })

// var p = new Promise(function(resolve, reject){
//     reject(5)
// })
// var p1 = p.then(undefined, function(value){
//     console.log(value)   // 5
// }).then(function(value){
//     console.log('fulfill ' + value)   // fulfill undefined
// }, function(reason){
//     console.log('reject ' + reason)
// })

// for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
// for (let i = 0; i < 3; i++) {
//   let i = 'abc';
//   console.log(i);
// }


// function f() { console.log('I am outside!'); }

// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// }());

// 变量提升
// a = 3;
// var a;
// console.log(a);

// let aaa = 'zhuguoliang';

// function hello(name) {
// 	console.log('hello ' + name);
// }

// let obj = {
// 	a: 2
// }
// let myObj = Object.create(obj);

// console.log(myObj.a);
// console.log(myObj.hasOwnProperty("a"));
// myObj.a++;
// console.log(myObj.hasOwnProperty("a"));


/*function Foo() {
	console.log("dadsdsa");
}

var a = new Foo();

console.log(a);*/

// var str = "12345567";

// console.log(str.slice(0,3));
// console.log(str);

// function Person(name){
//         this.name = name;
//        /* this.showName = function () {
//         	console.log(this.name);
//         }*/
// }

// Person.prototype.showName = function(){
//         console.log(this.name);
// }

// function Worker(name, job){
//         Person.apply(this,arguments);
//         this.job = job;
// }


// var worker = new Worker('zgl', 'IT');

// console.log(worker.showName());

// var single = (function() {
//     var unique;

//     function getInstance() {
//         if (unique === undefined) {
//             unique = new Construct();
//         }
//         return unique;
//     }

//     function Construct() {
//         // ... 生成单例的构造函数的代码
//     }
//     return {
//         getInstance: getInstance
//     }
// })();

// class Storage {
// 	var instance = null;
//     static getInstance() {
//         if (!instance) {
//             instance = new Storage();
//         }
//         return instance;
//     }
// }


// var a = {dj: "1", id: '123', je: "1.00", sl: "1.00", xm: "12"};
// var i = 0;
// Object.keys(a).every(key => {
// 	console.log(a[key]);
// 	return true;
// });
// console.log(i);
// console.log(Object.keys(a));


// if (!0) {
// 	console.log(123);
// }
// window.a = 2;
// console.log(a);

// var obj = {a:123, b:[]};
// const {a, b} = obj;
// console.log(a,b);

// var a = {};
// if (a) {
// 	console.log(123);
// }

// var test = {
//   "result": {
//     "total": 0,
//     "data": [],
//     "page": 1,
//     "rows": 0
//   },
//   "message": "成功",
//   "code": "0",
//   "cause": null
// };

// const {code, result} = test;

// // console.log(result);
// let params = {a: 123};
// let param = {...{a: 456}, ...params, ...{zclx: 123}};
// console.log(param);

// var readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// var countLine = 1;
// var tokens = [];
// rl.on('line', function(line){
//     tokens = tokens.concat(line.split(' '));
//     if(countLine == 2){
//         var len = Number(tokens.shift())
//         tokens.sort(sortFun)
//         var res = ''
//         for(var i = 0; i < tokens.length; i++){
//             res += tokens[i]
//         }
//         console.log(res)
//         function sortFun(num1, num2){
//             if(num1 + num2 < num2 + num1)return 1
//             else return -1
//         }
//     }
//     countLine ++;
// });


// var readline = require('readline');
// var rl = readline.createInterface(
//     process.stdin,
//     process.stdout
// );
// var n = -1;
// var input = [];
// rl.on('line', function(line){
//     if (n === -1) {
//         n = line.trim();
//     } else {
//         input = line.split(' ').sort(function(a, b){
//             return (b + a) - (a + b);
//         });
//         console.log(input.join(''));
//         n = -1;
//     }
// });
// var input = [];
// var readline = require('readline');
// var rl = readline.createInterface(
// 	process.stdin,
// 	process.stdout
// );
// rl.on('line', line => {
// 	input = line.split(" ");
// 	console.log(input.reverse().join(" "));
// })
// function test(a) {

// }


// console.log(test.length);

// console.log([1,2,3].filter(value => value >5));

// var array = [];
// array[12] = 123;
// console.log(array.length);

// console.log(Array.from("asdf"));

// if ({}) {
// 	console.log(123);
// }

// var a = 4;
// var b = a;

// b = 5;

// console.log();

// var array = [1, 3, 4];

// var test = array;

// // test.push(123);
// test = [4,5,6];

// console.log(a, array);


// var readline = require('readline');
// var rl = readline.createInterface({
// 	process.stdin,
// 	process.stdout
// });

// rl.on('line', function(line) {
// 	var range = line.split(' ');
// })


// (function() {console.log(2222);})()


// let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

// for (let [key, value] of iterable) {
//   console.log(key);
// }
// for (let entry of iterable) {
//   console.log(entry);
// }

// class CustomHTMLElement {
//   constructor(element) {
//     this.element = element;
//   }

//   get html() {
//     return this.element.innerHTML;
//   }

//   set html(value) {
//     this.element.innerHTML = value;
//   }
// }

// var descriptor = Object.getOwnPropertyDescriptor(
//   CustomHTMLElement.prototype, "html"
// );
// console.log(descriptor);

    // var r = new Promise(function(resolve, reject){
    //     console.log("a");
    //     resolve()
    // });
    // setTimeout(()=>console.log("d"), 0)
    // r.then(() => console.log("c"));
    // console.log("b")

    // setTimeout(()=>console.log("d"), 0)
    // var r1 = new Promise(function(resolve, reject){
    //     resolve()
    // });
    // r1.then(() => { 
    //     var begin = Date.now();
    //     while(Date.now() - begin < 1000);
    //     console.log("c1") 
    //     new Promise(function(resolve, reject){
    //         resolve()
    //     }).then(() => console.log("c2"))
    // });


// function test() {
// 	var a = 123;
// }
// if (true) {
//  	console.log(a);
// }
// var b;
// void function(){
//     var env = {b:1};
//     b = 1;
//     console.log("In function b:", b);
//     with(env) {
//         var b = 1;
//         console.log("In with b:", b);
//     }
// }();
// console.log("Global b:", b);


// 块级作用域
// if (true) {
// 	let a = 123;
// }

// console.log(a);


// var a = [1,2,3,4,5];
// console.log(a.slice(1));

// var a = [{a:123, b:123},{a:123, b:456}];
// var b = a.find(item => item.a === 123);
// console.log(b);
// var a = 1;
// function foo() {
// 	a = 2;
// }

// console.log(foo());

// let a1 =  ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
// let a2 = ['A', 'B', 'C', 'D'].map((item) => {
//   return item + 3
// })

// let a3 = [...a1, ...a2].sort().map((item) => {
//   if(item.includes('3')){
//     return item.split('')[0]
//   }
//   return item
// })

// var b = 10;
// (function b(){
//     b = 20;
//     console.log(b); 
// })();


// function test() {
// 	this.b = 3;
// };
//
// var a = new test();
// console.log(a.b);

// function tag(strings, ...values) {
// 	return strings.reduce( function(s,v,idx){
// 		return s + (idx > 0 ? values[idx-1] : "") + v;
// 	}, "" );
// }
// var desc = "awesome";
// var text = tag`Everything is ${desc}!`;
// console.log( text );

var controller = {
	makeRequest: function () {
		console.log(this);
	},
	helper: () => {
	}
};
controller.makeRequest();

// var controller = {
// 	makeRequest: function(){
// 		setTimeout(() => {
// 			console.log(this);
// 			// this.makeRequest();
// 		}, 10)
// 	}
// };
// controller.makeRequest();
