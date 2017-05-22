var db=require('../db/dbMysql.js');

var createOrder = function (userId,orderTotalPrice,goodsId,totalNum,callback) {
  var sql = 'INSERT INTO order_list (userId,orderNum,orderTotalPrice,orderStatus) VALUES (?,?,?,?)';
  var orderNum = "lht"+Math.floor(Math.random () * 900)+ Date.now();
  db.query(sql,[userId,orderNum,orderTotalPrice,0],function (error,results,fields){
     var orderId = results.insertId;
     db.query('select * from goods_list where goodsId = '+goodsId,function (error,results2,fields){
     	var orderTime = getNowFormatDate();
       var insert = 'INSERT INTO order_list_detail (orderId,goodsName,supplierId,goodsPrice,goodsNum,goodsStatus,orderTime,goodsType,goodsId) VALUES (?,?,?,?,?,?,?,?,?)'
       db.query(insert,[orderId,results2[0].goodsName,results2[0].supplierId,results2[0].price,totalNum,0,orderTime,results2[0].goodsType,goodsId],function (error,results3,fields){
       	     callback(results3);
       })
     })
  })

}

var getOrderList = function (userId,callback){
   var sql = 'SELECT * FROM order_list LEFT JOIN order_list_detail ON order_list.orderId = order_list_detail.orderId LEFT JOIN img_url ON img_url.goodsId = order_list_detail.goodsId  WHERE order_list.userId = '+userId;
   db.query(sql,function (error,results,fields){
   	   callback(results);
   })
}

var pay = function (userId,totalMoney,callback) {
 
}

//获取当前时间
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}

module.exports = {
  createOrder:createOrder,
  getOrderList:getOrderList,
  pay:pay
}