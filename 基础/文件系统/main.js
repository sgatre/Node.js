var fs = require("fs");

// 异步打开文件 fs.open()
console.log("准备打开文件");
fs.open('fs.js', 'r+', function(err, fd) {
  if(err) {
    return console.error(err);
  }
  console.log("文件打开成功");
});

// 获取文件信息 fs.stat()

fs.stat('fs.js', function(err, stats) {
  console.log(stats.isFile());    //true
});