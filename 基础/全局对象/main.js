console.log(__filename);
console.log(__dirname);

function  printHello() {
	console.log("Hello World");
}
//两秒以后执行函数
var t = setTimeout(printHello, 2000);
clearTimeout(t);

// 不停调用函数知道关闭或 clearInterval()
setInterval(printHello, 2000);

