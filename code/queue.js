function Queue() {
	this.data = [];
	this.enqueue = enqueue; // 入队列
	this.dequeue = dequeue; // 出队列
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element) {
	this.data.push(element);
	return this;   // 链式调用
}

function dequeue() {
	return this.data.shift();
}

function front() {
	return this.data[0];
}

function back() {
	return this.data[this.data.length - 1];
}

function toString() {
	var retStr = '';
	for (var i = 0; i < this.data.length; i++) {
		retStr += this.data[i] + ' ' ; 
	}
	return retStr;
}

function empty() {
	if(this.data.length === 0) {
		return true;
	} else {
		return false;
	}
}

// 队列测试

var queue = new Queue().enqueue('1').enqueue('2').enqueue('3');

console.log(queue.toString());
console.log(queue.dequeue());
console.log(queue.toString());

