var  express = require('express');
var  LoginDb = require('./server/controller/users.js');
var  app = express();
app.listen(3000, function (req,res) {
	console.log("node服务开启")
})
app.get('/login',function(req,res){
   var username = req.query.username;
   var password = req.query.password;
   LoginDb(username,password);
   var j={'username':username,'password':password};
   res.send(j);
})
