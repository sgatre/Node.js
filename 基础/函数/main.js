// 一个函数可以作为另一个函数的参数，和js类似
function say(word) {
	console.log(word);
}

function execute(someFunction, value) {
	someFunction(value);
}

execute(say, "Hello world");

// 匿名函数

execute(function (word) {
	console.log(word);
}, "Hello");