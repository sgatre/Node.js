var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1 () {
	console.log("1");
};

var listener2 = function listener2() {
	console.log("2");
};

eventEmitter.addListener('connection', listener1);
eventEmitter.addListener('connection', listener2);

var eventEmittersCount = require("events").EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventEmittersCount+"个监听器");

eventEmitter.emit('connection');

//移除
eventEmitter.removeListener('connection', listener1);
console.log("1移除");

eventEmitter.emit('connection');

eventEmittersCount = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventEmittersCount+"个监听器");

console.log("完毕");

//绑定connection