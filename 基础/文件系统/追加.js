var fs = require("fs");

fs.open("input.txt", "a+", function (err, fd) {
	if(err) {
		return console.error(err);
	}
	fs.appendFile(fd, "追加", function (err) {
		if(err) {
			return console.log(err);
		}
	});
});