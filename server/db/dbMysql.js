var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : "root",
	port :3306,
	password : "123456",
	database : 'shop'
});
connection.connect();
module.exports = connection;
