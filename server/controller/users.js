var db=require('../db/dbMysql.js');
//处理登录
var login = function (username,password,callback) {
	var sql = 'SELECT * from user_info where userName =\''+username+'\' and password = \''+password+'\'';
	db.query(sql, function (error, results, fields) {
		if (error) throw error;
		if (results == null || results.length<=0){
			console.log("密码错误");
			callback(false);
		} else {
			callback(true);
		}
	});
}
//处理注册
var register = function (username,password,nickname,callback) {
	var sql = 'SELECT * from user_info where userName = \''+username+'\'';
    db.query(sql, function (error,results,fields) {
     if(error) throw error;
     if(results == null || results.length<=0){
     	db.query('INSERT INTO user_info (username,password,nickname,balance) VALUES (?,?,?,?)',[username,password,nickname,2000],function (error,results,fields) {
     		if(error) throw error;
     		callback(true);
     	})
     } else {
         callback(false);  
     }
   })
}

//用户个人信息

var usreInfo = function (username,callback) {
 var sql = 'SELECT * from user_info where userName = \''+username+'\'';
 db.query(sql,function (error,results,fields) {
    callback(results);
 })
}

module.exports = {
	login:login,
	register:register,
	usreInfo:usreInfo
}
