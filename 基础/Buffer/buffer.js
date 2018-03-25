// 写入缓存区
buf = Buffer.alloc(256);
len = buf.write("wangtianzhi.me");
console.log("写入字节数：" + len);

// 从缓冲区读取数据
buf = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
	buf[i] = i + 97;
}
console.log(buf.toString("ascii"));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 5));
console.log(buf.toString(undefined, 0, 5));

buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
json = JSON.stringify(buf);
console.log(json);

const copy = JSON.parse(json, (key, value) => {
	return value && value.type == 'Buffer' ?
		Buffer.from(value.data) :
		value;
});

console.log(copy);

// 缓冲区合并
var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from('wangtianzhi.me');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(buffer3.toString());

// 缓冲区比较
var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if (result < 0) {
	console.log(buffer1 + "在" + buffer2 + "之前");
} else if (result == 0) {
	console.log(buffer1 + "与" + buffer2 + "相同");
} else {
	console.log(buffer1 + "在" + buffer2 + "之后");
}

// 拷贝缓冲区
var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNOOB');
buf2.copy(buf1, 2);

console.log(buf1.toString());
// 缓冲区裁剪
console.log(buf1.slice(0, 3));
// 缓冲区长度
console.log("length: " + buf1.length);
