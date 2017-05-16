var db=require('../db/dbMysql.js');
//处理登录
var login = function(username,password){
	var sql = 'SELECT * from user_info';
	db.query(sql, function (error, results, fields) {
		if (error) throw error;
		console.log('The solution is: ', results);
	});
}
//处理注册
var register = function(username,password){
   db.open(function(err,db){
	if(err){return console.error(err);}
	db.collection("user_info",function(err,collection){
		var data={'username':username,'password':password};
		collection.insert(data,{safe:true},function(err,result){
			console.log(result);
		})
		db.close();
	})
})
}

module.exports = {
	login:login,
	register:register
}
