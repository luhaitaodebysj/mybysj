var db=require('../db/db.js');
var Login = function(username,password){
   db.open(function(err,db){
	if(err){return console.error(err);}
	db.collection("user_info",function(err,collection){
		var data={'user':username,'password':password};
		collection.insert(data,{safe:true},function(err,result){
			console.log(result);
		})
		db.close();
	})
})
}
module.exports = Login;