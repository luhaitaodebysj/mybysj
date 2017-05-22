var db=require('../db/dbMysql.js');
var putGoods = function (userid,title,discribe,imglist,price,inventory,goodsType,callback){
 db.query( 'INSERT INTO goods_list (supplierId,goodsTitle,goodsName,price,inventory,goodsType,status) VALUES (?,?,?,?,?,?,1)',[userid,title,discribe,price,inventory,goodsType],function (error,results,fields){
 	var goodsId = results.insertId;
 	var length = imglist.length;
 	var sql = "INSERT INTO img_url (imgUrl,goodsId) VALUES ";
 	var arr = [];
 	for(var i = 0; i < length; i++){
 		console.log(imglist[i])
        arr.push("("+"'"+imglist[i]+"'"+","+goodsId+")");
 	}
    sql = sql + arr.join(",");
    console.log(sql);
 	db.query(sql,function (error,results,fields){
 		callback(true);
 	})
 })

}

var groundingList = function (userid,callback) {
	var sql = `SELECT gl.goodsId,gl.supplierId,gl.goodsName,gl.goodsTitle,gl.price,gl.STATUS,gl.inventory,gl.goodsType,ir.imgUrl,ir.id FROM goods_list gl LEFT JOIN img_url ir ON gl.goodsId = ir.goodsId WHERE gl.supplierId = ${userid}`;
  console.log(sql);
   db.query(sql,function (error, results, fields){
   	  console.log(results);
   	    callback(results);
   })
}

var goodsDetail = function (goodsId,callback){
  var sql = `SELECT * from goods_list LEFT JOIN img_url ON goods_list.goodsId =img_url.goodsId  WHERE goods_list.goodsId = ${goodsId}`;
    console.log(sql);
    db.query(sql,function (error,results,fields){
      callback(results);
    })
}

var collect = function (goodsId,userId,num,callback){
  var sql = 'INSERT INTO shopping_list (userId) VALUES(?)';
  var param = [userId];
  db.query(sql,param,function (error,results,fields){
     var cartId = results.insertId;  
     var s = 'SELECT * from goods_list WHERE goodsId = '+goodsId;
     db.query(s,function (error,results2,fields){
         var data = [cartId,goodsId,results2[0].supplierId,results2[0].goodsName,results2[0].price,num];
        db.query('INSERT INTO shopping_list_detail (cartId,goodsId,supplierId,goodsName,goodsPrice,quantity) VALUES(?,?,?,?,?,?)',data,function (error,results3,fields){
              callback(true);
        })
     })
  })
}

var showCollect = function (userId,callback){
  var sql = `SELECT *, COUNT(quantity) AS num FROM shopping_list
LEFT JOIN shopping_list_detail ON shopping_list.cartId = shopping_list_detail.cartId
LEFT JOIN img_url ON img_url.goodsId  = shopping_list_detail.goodsId
WHERE userId = ${userId} GROUP BY shopping_list_detail.goodsId`; 
  console.log(sql);
  db.query(sql,function (error,results,fields){
     console.log(results);
     callback(results);
  })
}
module.exports = {
	putGoods:putGoods,
	groundingList:groundingList,
  goodsDetail:goodsDetail,
  collect:collect,
  showCollect:showCollect
}