var mongo = require('mongodb');
var mongoServer = new mongo.Server('localhost',27017,{safe:true});
var db= new mongo.Db("shop",mongoServer);
module.exports = db;

