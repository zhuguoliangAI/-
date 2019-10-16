// 栈的实现
// js中数组就是栈的方式实现的
function Stack() {
	this.data = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peak = peak;
	this.length = length;
	this.clear = clear;
}

function push (element) {
	 this.data[this.top++] = element;
}
function pop () {
	return this.data[--this.top];
}
function peak() {
	return this.data[this.top-1];
}
function length() {
	return this.top;
}
function clear() {
	this.top = 0;
}



// 测试栈的是实现
// var stack = new Stack();
// stack.push('zhuguoliang');
// stack.push('pengxiyang');

// console.log(stack.length());
// console.log(stack.pop());
// console.log(stack.length());

// 使用栈实现数制转换
function mulBase(num, base) {
	var s = new Stack();
	do {
		s.push(num % base);
		num = Math.floor(num / base);
	} while(num > 0);
	var result = '';

	// console.log(s);

	while (s.length()) {
		result += s.pop();
	}
	return result;
}

// console.log(mulBase(8, 2));

// 判断回文
function isPalindrome(word) {
	var s = new Stack();
	for(var i = 0; i < word.length; i++) {
		s.push(word[i]);
	}
	var pWord = '';
	while (s.length()) {
		pWord += s.pop();
	}
	if(pWord === word) {
		return true;·
	} else {
		return false;
	}
}

// console.log('word'[0]);
console.log(isPalindrome('101'));


