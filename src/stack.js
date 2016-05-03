/**
	Stack: 栈的实现
	栈是一种后入先出（LIFO）的数据结构
**/
function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}

/**
	入栈
**/
function push(element) {
	this.dataStore[this.top++] = element;
}

/**
	出栈
**/
function pop() {
	return this.dataStore[--this.top];
}

/**
	返回栈顶元素，但不删除
**/
function peek() {
	return this.dataStore[this.top - 1];
}

function clear() {
	this.top = 0;
}

function length() {
	return this.top;
}

/**
	demo
	判断输入时否是回文
**/
function isPalindrome(word) {
	var s = new Stack();
	for(var i = 0, len = word.length; i < len; i++) {
		s.push(word[i]);
	}

	var rword = '';
	while(s.length() > 0) {
		rword += s.pop();
	}

	if(word === rword) {
		return true;
	}
	return false;
}

