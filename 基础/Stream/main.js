var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs. createReadStream('input.txt');

// 设置编码
readerStream.setEncoding('UTF8');

//处理流事件
readerStream.on('data', function (chunk) {
	data += chunk;
});

readerStream.on('end', function () {
	console.log(data);
});

readerStream.on('error', function (err) {
	console.log(err.stack);
});

console.log("程序执行完毕");

var fs2 = require('fs');
var data2 = "wangtianzhi.me";

// 创建一个可以写入的流，写入到文件 output.txrt 中
var writerStream = fs.createWriteStream("output.txt");
writerStream.write(data2, 'UTF8');
// 标记文件末尾
writerStream.end();

// 处理流事件
writerStream.on('finish', function () {
	console.log("写入完成");
});

writerStream.on('error', function (err) {
	console.log(err.stack);
});

console.log("程序完成");

// 管道流
var fs3 = require("fs");

var readerStream1 = fs.createReadStream("input.txt");
var writerStream1 = fs.createWriteStream("output2.txt")

//管道读写操作
readerStream1.pipe(writerStream1);

// 链式流
var fs3 = require("fs");
var zlib = require('zlib');

// 压缩
fs3.createReadStream("input.txt")
		.pipe(zlib.createGzip())
		.pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成");

var fs4 = require('fs');
var zlib = require('zlib');
fs4.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input2.txt'));

console.log("文件解压完成");