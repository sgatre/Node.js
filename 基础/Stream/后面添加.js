let fs = require('fs');
let data = '';
let data2 = '你的小青蛙真是可爱';
// 1. 读取流
let readStream = fs.createReadStream('input.txt');
readStream.setEncoding('UTF8');
readStream.on('data', chunk => data += chunk);
readStream.on('end', () => writeS(data));
readStream.on('error', err => console.log(err.stack));
console.log('程序1执行完毕');
// 2. 写入流
// 创建可写流
let writeS = dataS => {
	let writeStream = fs.createWriteStream("outInput.txt");
	writeStream.write(data2 + dataS, "UTF8");
	writeStream.end();
	// 处理事件流
	writeStream.on("finish", () => console.log("写入完成"));
	writeStream.on("error", err => console.log(err.stack));
	console.log("程序2执行完毕");
};