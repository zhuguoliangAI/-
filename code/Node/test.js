// 事件轮巡 非阻塞的
// console.log('hello');

// setTimeout( function() {
// 	console.log('world');
// }, 1000);
// console.log('world1');


// 单线程
// var start = Date.now();

// setTimeout( function() {
// 	console.log(Date.now() - start);
// 	for(var i = 0; i < 100000000; i++){}
// }, 1000);

// setTimeout( function() {
// 	console.log(Date.now() - start);
// }, 2000);

var http = require('http');

module.exports = http.createServer((req, res) => {
	res.end('Hello World!!!!');
});
