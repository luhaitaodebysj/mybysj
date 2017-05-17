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
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable


var app = express();
var user = require('../server/controller/users.js');
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
      req.session.user={
        username:username,
        password:password
      }
      user.login(username,password,function (results) {
        res.send(results);
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
    var username = req.session.user.username;
     user.usreInfo(username,function (results) {
      res.send(results);
     })
  } else {
    res.send(0);
  }
})

//上架商品接口
apiRouter.get('goods/put',function (req,res) {
  
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
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port);
module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
