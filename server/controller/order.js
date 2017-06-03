var db=require('../db/dbMysql.js');

var createOrder = function (userId,orderTotalPrice,goodsId,totalNum,callback) {
  var sql = 'INSERT INTO order_list (userId,orderNum,orderTotalPrice,orderStatus) VALUES (?,?,?,?)';
  var orderNum = "lht"+Math.floor(Math.random () * 900)+ Date.now();
  db.query(sql,[userId,orderNum,orderTotalPrice,0],function (error,results,fields){
     var orderId = results.insertId;
     db.query('select * from goods_list where goodsId = '+goodsId,function (error,results2,fields){
     	var orderTime = getNowFormatDate();
       var insert = 'INSERT INTO order_list_detail (orderId,goodsName,supplierId,goodsPrice,goodsNum,goodsStatus,orderTime,goodsType,goodsId) VALUES (?,?,?,?,?,?,?,?,?)'
       db.query(insert,[orderId,results2[0].goodsName,results2[0].supplierId,results2[0].price,totalNum,2,orderTime,results2[0].goodsType,goodsId],function (error,results3,fields){
       	     db.query('DELETE FROM shopping_list_detail WHERE goodsId='+goodsId);
             db.query('DELETE FROM shopping_list WHERE userId='+userId);
             callback(results3);
       })
     })
  })

  //下单后要更新物品的状态
  db.query("UPDATE goods_list set status = 2 where goodsId = "+goodsId,function (error,results,fields){
  })

}

var getOrderList = function (userId,callback){
   var sql = 'SELECT * FROM order_list LEFT JOIN order_list_detail ON order_list.orderId = order_list_detail.orderId LEFT JOIN img_url ON img_url.goodsId = order_list_detail.goodsId  WHERE order_list.userId = '+userId;
   db.query(sql,function (error,results,fields){
   	   callback(results);
   })
}

//获取商品详情
var getorderDetail = function (userId,goodsId,callback){
  var sql = 'SELECT * FROM order_list LEFT JOIN order_list_detail ON order_list.orderId = order_list_detail.orderId LEFT JOIN img_url ON img_url.goodsId = '+goodsId+'  WHERE order_list.userId = '+userId+' AND  order_list_detail.goodsId = '+goodsId;
  console.log(sql);
  db.query(sql,function (error,results,fields){
   callback(results);
 })
}

var pay = function (userId,totalMoney,goodsId,orderId,callback) {
  db.query('select balance from user_info where userId ='+userId,function (error,results,fields) {
   var balance = results[0].balance;
    if (balance <= totalMoney){
       callback("noMoney");
       return ;
    }
    db.query('UPDATE user_info SET balance = balance -'+totalMoney+' where userId ='+userId,function (error,results,fields){
           db.query('UPDATE order_list_detail set goodsStatus = 3 where goodsId = '+goodsId,function (error,results,fields){
            callback(true);
          })
    });
    var sql ='UPDATE user_info SET balance = balance +'+totalMoney+' WHERE userId = (select supplierId from order_list_detail WHERE goodsId = '+goodsId+')';
   db.query(sql,function (error,results,fields) { 
       console.log(results);
   })

  })
}

//发货
var delivery = function (goodsId,callback){
    db.query('update goods_list set status = 4 where goodsId = '+goodsId,function (error,results,fields){
      callback();
    })
    db.query('update order_list_detail set goodsStatus = 4 where goodsId = '+goodsId)
}

//收货
var takeGoods = function (goodsId,callback){ 
   db.query('update goods_list set status = 5 where goodsId = '+goodsId,function(){
      callback();
   })
   db.query('update order_list_detail set goodsStatus = 5 where goodsId = '+goodsId)
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
  getorderDetail:getorderDetail,
  pay:pay,
  delivery:delivery,
  takeGoods:takeGoods
}