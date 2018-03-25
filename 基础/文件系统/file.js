// 写入
var fs = require("fs");

// console.log("准备写入");
// fs.writeFile('input.txt', '我是通过fs.writeFile写入的内容', function(err) {
//   if(err) {
//     return console.error(err);
//   }
//   console.log("数据写入成功");
//   console.log("______________________");
//   console.log("读取写入的数据");
//   fs.readFile('input.txt', function(err, data) {
//     if(err) {
//       return console.error(err);
//     }
//     console.log("异步读取文件数据：" + data.toString());
//   });
// });
var dataS = '';

fs.readFile('input.txt', function(err, data) {
  fs.writeFile('input.txt', data + "接着上面的继续写", function(err) {});
});