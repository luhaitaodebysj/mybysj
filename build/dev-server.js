require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
// var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable


var app = express();
var user = require('../server/controller/users.js');
var goods = require('../server/controller/shoping.js');
var indexGoods = require('../server/controller/homegoods.js');
var order = require('../server/controller/order.js');
var cookieParser =require('cookie-parser');
var session = require('express-session');
var apiRouter = express.Router();
app.use(cookieParser());
app.use(session({
   secret:'12345',
   cookie:{maxAge:1000*60*60},
   resave:false,
   saveUninitialized:false
}))

//以下处理接口
apiRouter.post('/user/login',function (req,res){
  var username;
  var password;
  var data = "";
  req.on("data",function(chunk){
    data+=chunk;
  })
  req.on("end",function(){
      data = JSON.parse(data);
      username = data.username;
      password = data.password;
      user.login(username,password,function (results) {
        var userId = results[0].userId;
        req.session.user = {
          userId :userId
        }
        res.send(""+userId);
      });
  })
})
apiRouter.post('/user/register',function (req,res){
  var username;
  var password;
  var nickname;
  var data = "";
  req.on("data",function(chunk){
    data+=chunk;
  })
  req.on("end",function(){
      data = JSON.parse(data);
      username = data.username;
      password = data.password;
      nickname = data.nickname;
      user.register(username,password,nickname,function (results) {
        res.send(results);
      });
  })
})
//获取用户信息
apiRouter.get('/user/info',function (req,res) {
  if (req.session.user){
    var userId = req.session.user.userId;
     user.usreInfo(userId,function (results) {
      res.send(results);
     })
  } else {
    res.send(false);
  }
})

//上传图片
var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'static/picture');
  },
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
});

 var upload = multer({
      storage: storage
});

apiRouter.post('/goods/put', upload.single('goodsimg'), function (req, res, next) {
  res.send(req.file.filename)
})

//上传商品信息接口
apiRouter.post('/goods/putgoods',function (req,res){
  var userid,title,discribe,imglist,price,inventory,goodsType;
  var data = "";
  req.on("data",function(chunk){
    data+=chunk;
  })
  req.on("end",function(){
      data = JSON.parse(data);
      userid = data.userid;
      title = data.title;
      discribe = data.discribe;
      imglist = data.imglist;
      console.log("商品地址");
      console.log(imglist);
      price = data.price;
      inventory = data.inventory;
      goodsType = data.goodsType;
      goods.putGoods(userid,title,discribe,imglist,price,inventory,goodsType,function (results) {
        res.send(results);
      })
  })
})

//获取用户上架的商品接口
apiRouter.get('/goods/goodsList',function (req,res){
  if(req.session.user) {
     var userId = req.session.user.userId;
      goods.groundingList(userId,function (results) {
          res.send(results);
      })
  } else {
    res.send(false);
  }
})

//获取商品详情
apiRouter.get('/goods/goodsDetail',function (req,res){
  var goodsId = req.query.goodsId;   
  goods.goodsDetail(goodsId,function (results){
     res.send(results);
  })
})

//加入购物车
apiRouter.get('/goods/collect',function (req,res){
  if (req.session.user){
    var goodsId = req.query.goodsId;
    var userId = req.session.user.userId;
    var num = 1;
    console.log("userid"+userId);
    goods.collect(goodsId,userId,num,function (results){
     res.send(results);
   })
  } else {
    res.send(false);
  }
})

//获取购物车信息
apiRouter.get('/goods/shop',function (req,res){
  if (req.session.user){
    var userId = req.session.user.userId;
    goods.showCollect(userId,function (results){
     res.send(results);
   })
  } else {
    res.send(false);
  }
})


//创建订单
apiRouter.post('/order/create',function (req,res){
  if(req.session.user){
    var data = "";
    req.on("data",function(chunk){
      data+=chunk;
    })
    req.on("end",function(){
      data = JSON.parse(data);
      var orderTotalPrice = data.totalPrice;
      var userId = req.session.user.userId;
      var goodsId = data.goodsId;
      var totalNum = data.totalNum;
      order.createOrder(userId,orderTotalPrice,goodsId,totalNum,function (results){
       res.send(results);
     })
  })
  } else {
    res.send(false);
  }

})

//获取订单列表信息
apiRouter.get('/order/orderList',function (req,res){
   if(req.session.user){
    var userId = req.session.user.userId;
    order.getOrderList(userId,function (results){
      console.log(results);
      res.send(results);
    })
   } else {
      res.send(false);
   }

})

//获取订单详情信息
apiRouter.get('/order/orderDetail',function (req,res){
   if(req.session.user){
    var userId = req.session.user.userId;
    order.getOrderList(userId,function (results){
     user.getAddress(userId,function (results2){
       var arr =[results[0],results2[0]];
       res.send(arr);
     })
    })
   } else {
      res.send(false);
   }

})

//付款
apiRouter.post('/order/pay',function (req,res){
     if(req.session.user){
      var userId = req.session.user.userId;
      var data = "";
      req.on("data",function(chunk){
        data+=chunk;
      })
      req.on("end",function(){
        data = JSON.parse(data);
        var totalMoney = data.totalMoney;
        var goodsId = data.goodsId;
        var orderId = data.orderId;
        order.pay(userId,totalMoney,goodsId,orderId,function (results){
          res.send(results);
        })
      })
    } else {
      res.send(false);
    }
})

//订单发货
apiRouter.get('/order/delivery',function (req,res){
   if(req.session.user){
      var goodsId = req.query.goodsId;
      order.delivery(goodsId,function (){
        res.send(true);
      })
   } else{
     res.send(false);
   }
})

//买家收货
apiRouter.get('/order/take',function (req,res){
     if(req.session.user){
      var goodsId = req.query.goodsId;
      order.takeGoods(goodsId,function (){
        res.send(true);
      })
    } else{
     res.send(false);
    }
})

//存取收获地址
apiRouter.post('/user/address',function (req,res){
   if(req.session.user){
      var userId = req.session.user.userId;
      var data = "";
      req.on("data",function(chunk){
        data+=chunk;
      })
      req.on("end",function(){
        data = JSON.parse(data);
        console.log(data);
        var name = data.name;
        var tel = data.tel;
        var address = data.address;
        user.setAddress(userId,name,tel,address,function (results){
          res.send(results);
        })
      })
  } else {
      res.send(false);
   }
})

//获取收获地址
apiRouter.get('/user/getaddress',function (req,res) {
 if(req.session.user){
  var userId = req.session.user.userId;
  user.getAddress(userId,function (results){
    res.send(results);
  })
} else {
  res.send("tologin");
}
})
//获取主页 商品信息
apiRouter.get('/home/goods',function (req,res){
  indexGoods.showhome(function (results){
    res.send(results);
  })
})

//获取更多
apiRouter.get('/home/more',function (req,res){
  var type = req.query.type;
  indexGoods.showmore(type,function (results){
    res.send(results);
  })
})


app.use('/api',apiRouter);



var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  // if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
  //   opn(uri)
  // }
  _resolve()
})

var server = app.listen(port);
module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
