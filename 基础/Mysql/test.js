var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'huzi866812571230',
	database: 'dbnodejs'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	if(error) throw error;
	console.log('The solution is:', results[0].solution);
});