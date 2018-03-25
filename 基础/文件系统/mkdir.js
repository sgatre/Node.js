var fs = require("fs");

// 注意 创建目录必须一层一层的创建
console.log(" 创建目录 /tmp/test/");
fs.mkdir("tmp/", function (err) {
	if(err) {
		return console.error(err);
	}
	console.log("创建目录成功");
});

console.log("查看/tmp目录");
fs.readdir("tmp/", function(err, files) {
	if(err) {
		return console.error(err);
	}
	files.forEach(function (file) {
		console.log(file);
	});
});

// fs.rmdir("tmp", function(err) {
// 	if(err) {
// 		return console.error(err);
// 	}
// });