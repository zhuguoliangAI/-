// js 关键字this的学习

// 1、this的基本用法
function identify() {
	return this.name.toUpperCase();
}

function speak() {
	var greeting = "Hello, I am " + identify.call(this);
	console.log(greeting);
}

var me = {
	name: 'James'
};

// console.log(identify.call(me));
// console.log(identify.apply(me));
// 返回JAMES 注意call与apply的区别
// speak.call(me);

// 2、对this的误解 
// 1 this指向函数本身
// 统计foo函数的调用次数,但是这里的this没有指向foo而是指向了全局对象
function foo(number) {
	// console.log('foo '+ number);
	// console.log(this);
	this.count ++;
}

foo.count = 0;

for (var i = 0; i < 4; i++) {
	// foo(i); // 不行
	// foo.call(foo, i) // 强制this指向foo
}

// console.log(foo.count);

// 2 this指向函数的作用域
// this 是不可以和词法作用域的查找混合使用的
// function foo1() {
// 	var a = 2;
// 	bar(); // bar.call(foo1);
// }
// function bar() {
// 	// console.log(this);
// 	console.log(this.a);
// }
// foo1();


// 小结： this是在运行时进行绑定的，并不是在编写时绑定，他的上下文取决于函数调用时的各种条件。this的绑定和函数的声明的位置没有任何关系，只取决于函数的调用方式。
//        this既不指向函数自身也不指向函数的词法作用域，实际上是在函数调用时发生的绑定。
// 调用位置： 函数在代码中被调用的位置，而不是函数声明的位置。


// function foo2(p1, p2) {
// 	console.log('p1' +p1);
// 	console.log('p2' +p2);
// 	this.val = p1 + p2;
// }

// var obj = {};

// var bar1 = foo2.bind(null, '123');

// bar1('123', '456');
// console.log(obj.val);

// console.log(bar1());


// function foo() {
// 	console.log(this.a);
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// }

// obj.foo(); //2


// 箭头函数的this

function foo() {
	return (a) => {
		console.log(this.a);
	}
}

var obj1 = {
	a: 2
};

var obj2 = {
	a: 3
};
var bar = foo.call(obj1);
bar.call(obj2);   // 2 不是3 因为第一次调用已经绑定到obj2