/**
	列表数据类型定义
	－－－－－－－－－－－－－
	属性
	－－－－－－－－－－－－－
	listSize：列表的元素个数
	pos：列表的当前位置
	length：返回列表中元素的个数

	－－－－－－－－－－－－－
	方法
	－－－－－－－－－－－－－
	clear：清空列表中所有元素
	toString：返回列表的字符串形势
	find：在列表中查找某一元素
	insert：在现有元素后插入新元素
	getElement：返回当前位置的元素
	append：在列表的末尾添加新元素
	remove：从列表中删除元素
	front：将列表的当前位置移动到第一个元素
	end：将列表的当前位置移动到最后一个元素
	prev：将当前位置后移一位
	next：将当前位置前移一位
	hasNext：判断后一位
	hasPrev：判断前一位
	currPos：返回列表的当前位置
	moveTo：将当前位置移动到指定的位置
**/
function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.hasNext;
	this.hasPrev;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;
}

/**
	append: 给列表添加元素
**/
function append(element) {
	this.dataStore[this.listSize++] = element;
}

/**
	find: 在列表中查找某一元素
**/
function find(element) {
	for(var i = 0, len = this.dataStore.length; i < len; i++) {
		if(this.dataStore[i] === element) {
			return i;
		}
	}
	return -1;
}

/**
	remove: 从列表中删除元素
**/
function remove(element) {
	var fondAt = this.find(element);
	if(fondAt > -1) {
		this.dataStore.splice(fondAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}

/**
	length: 列表中元素个数
**/
function length() {
	return this.listSize;
}

/**
	toString: 显示列表中元素
**/
function toString() {
	return this.dataStore;
}

/**
	insert: 向列表中插入一个元素
**/
function  insert(element, afterElement) {
	var insertPos = this.find(afterElement);
	if(insertPos > -1) {
		this.dataStore.splice(insertPos + 1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}

/**
	clear: 清空列表中所有元素
**/
function clear() {
	delete this.dataStore;
	this.dataStore.length = 0;
	this.listSize = this.pos = 0;
}

/**
	contains: 判断给定值时否在列表中
**/
function contains(element) {
	for(var i = 0, len = this.dataStore.length; i < len; i++) {
		if(this.dataStore[i] === element) {
			return true;
		}
	}
	return false;
}

/**
	遍历元素
**/
function  front() {
	this.pos = 0;
}

function end() {
	this.pos = this.listSize - 1;
}

function prev() {
	--this.pos;
}

function next() {
	if(this.pos < this.listSize) {
		++this.pos;
	}
}

function currPos() {
	return this.pos;
}

function moveTo(position) {
	this.pos = position;
}

function getElement() {
	return this.dataStore[this.pos];
}

function hasNext() {
	return this.pos < this.listSize;
}

function hasPrev() {
	return this.pos >= 0;
}

