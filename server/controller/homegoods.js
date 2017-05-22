var db=require('../db/dbMysql.js');

var showhome = function (callback) {
  var sql = 'SELECT * from goods_list LEFT JOIN img_url ON goods_list.goodsId =img_url.goodsId WHERE img_url.imgUrl IS not NULL GROUP BY goods_list.goodsType';
  db.query(sql,function (error,results,fields){
      console.log(results);
      callback(results);
  })
}

var showmore = function (type,callback){
	var p="";
	switch (type){
		case "yf": p = '衣服';break;
		case 'ls': p = '零食';break;
		case 'sj': p = '书籍';break;
		case 'sm': p = '数码';break;
		case 'ot': p = '其他';break;
	}
	var sql ='SELECT * from goods_list LEFT JOIN img_url ON goods_list.goodsId =img_url.goodsId  WHERE goods_list.goodsType = \''+p+'\'';
	console.log(sql);
	db.query(sql,function (error,results,fields){
       callback(results);
	})
}
module.exports = {
	showhome: showhome,
	showmore: showmore
}