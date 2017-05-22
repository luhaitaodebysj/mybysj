var db=require('../db/dbMysql.js');
//处理登录
var login = function (username,password,callback) {
	var sql = 'SELECT userId from user_info where userName =\''+username+'\' and password = \''+password+'\'';
	db.query(sql, function (error, results, fields) {
		if (error) throw error;
		if (results == null || results.length<=0){
			console.log("密码错误");
			callback(false);
		} else {
			callback(results);
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

var usreInfo = function (usreId,callback) {
 var sql = 'SELECT * from user_info where userId = '+usreId;
 db.query(sql,function (error,results,fields) {
    callback(results);
 })
}

//收获地址

var setAddress = function (userId,name,tel,address,callback){
  var sql = 'INSERT INTO mall_address (userId,user,telPhone,address) VALUES (?,?,?,?)';
  var select = 'select * from mall_address where userId='+userId;
  db.query(select,function (error,results,fields) {
       if(results.length > 0){
         sql = 'UPDATE mall_address SET user = "'+name+'",telPhone = "'+tel+'",address = "'+address+'" where userId = '+userId;
       }
       console.log(sql);
  	  db.query(sql,[userId,name,tel,address],function (error,results,fields){
  	  	getAddress(userId,callback);
  })
  })

}

//获取收获地址
var getAddress = function (userId,callback) {
  var sql = 'SELECT * FROM mall_address WHERE userId = '+userId;
  db.query(sql,function (error,results,fields) {
  	console.log(results);
  	 callback(results);
  })
}

module.exports = {
	login:login,
	register:register,
	usreInfo:usreInfo,
	setAddress:setAddress,
	getAddress:getAddress
}
