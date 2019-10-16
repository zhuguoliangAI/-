// var XLSX = require('xlsx');

// console.log(XLSX);


// var a = [
// {
// 	a: 234,
// 	b: 234,
// }];


// a.map(item => {
// 	item.a = 123;
// 	return item;
// });

// console.log(a);


async function test() {
	setTimeout(() => {
		console.log(3);
		return 4;
	}, 1000)
}

console.log(1);
var a = await test();
console.log(a);
console.log(2);