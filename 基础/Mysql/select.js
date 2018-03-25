var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'huzi866812571230',
	port: '3306',
	database: 'dbnodejs',
});

connection.connect();

var sql = 'SELECT * FROM websites';
// 查
connection.query(sql, function (err, result) {
	if(err) {
		console.log('[SELECT ERROR - ', err.message);
		return;
	}
	console.log('---------SELECT----------');
	console.log(result);
	console.log('--------------------------\n\n');
});

// 增

var addSql = 'INSERT INTO websites(Id, name, url, alexa, country) VALUES(0, ?, ?, ?, ?)';
var addSqlParams = ['菜鸟工具', 'wangtianzhi.me', '23453', 'CN'];

connection.query(addSql, addSqlParams, function (err, result) {
	if(err) {return;}
	console.log('-------INSERT-------');
	console.log('INSERT ID: ',result);
	console.log('--------------------');
});

// 改
var modSql = 'UPDATE websites SET name=?,url=? WHERE Id = ?';
var modSqlParams = ['菜鸟移动站', 'http://m.runoob.com', 1];

connection.query(modSql, modSqlParams, function (err, result) {
	if(err) {return;}
	console.log('-------UPDATE---------');
	console.log('UPDATE affectedRows', result.affectedRows);
	console.log('-----------------------');
});

// 删
var delSql = 'DELETE FROM websites where id=2';
connection.query(delSql, function (err, result) {
	if(err) {
		console.log('err');
		return;
	}
	console.log('-------DELETE---------');
	console.log('DELETE affectedRows', result.affectedRows);
});
connection.end();