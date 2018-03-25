// var http = require('http');
// var querystring = require('querystring');
// var util = require('util');
// http.createServer(function(req, res) {
// 	// 定义一个post变量，用于暂存请求体的信息
// 	var post = '';
//
// 	// 通过req的data时间坚挺函数，每当接收到请求体的数据，就累加到post变量中
// 	req.on('data', function(chunk) {
// 		post += chunk;
// 	});
//
// 	// end触发后，通过querystring.parse将post解析为阵中的POST请求格式，然后返回
// 	req.on('end', function () {
// 		post = querystring.parse(post);
// 		res.end(util.inspect(post));
// 	});
// }).listen(3000);

// 实例
var http = require('http');
var querystring = require('querystring');

var postHTML =
	'<html><head><meta charset="utf-8"><title>王天智 node.js</title></head>' +
	'<body>' +
	'<form method="post">' +
	'网站名：<input name="name"><br>' +
	'网站 URL：<input name="url"><br>' +
	'<input type="submit">' +
	'</form>' +
	'</body></html>';

http.createServer(function (req, res) {
	var body = "";
	req.on('data', function (chunk) {
		body += chunk;
		console.log(body);
	});
	req.on('end', function() {
		// 解析参数
		body = querystring.parse(body);
		//设置响应头部信息及编码
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

		if(body.name && body.url) { // 输出提交的数据
			res.write("网站名：" + body.name);
			res.write("<br>");
			res.write("网站URL：" + body.url);
		} else {
			res.write(postHTML);
		}
		res.end();
	});
}).listen(3000);