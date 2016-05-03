/**
	enqueue: 向队尾添加一个元素
	dequeue：删除队首元素
	front：读取队首元素
	back：读取队尾元素
	toString：显示队内所有元素
	empty：判断队列时否为空
**/
function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element) {
	this.dataStore.push(element);
}

function dequeue() {
	return this.dataStore.shift();
}

function front() {
	return this.dataStore[0];
}

function back() {
	return this.dataStore[this.dataStore.length - 1];
}

function toString() {
	var retStr = '';
	for(var i = 0, len = this.dataStore.length; i < len; i++) {
		retStr += this.dataStore[i] + '\n';
	}
	return retStr;
}

function empty() {
	if(this.dataStore.length === 0) {
		return true;
	}
	return false;
}
