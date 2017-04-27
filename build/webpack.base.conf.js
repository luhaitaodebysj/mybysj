var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require('webpack')
var vuxLoader=require('vux-loader')
var webpackConfig={
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
    ? config.build.assetsPublicPath
    : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      "$":resolve('src/assets/js/zepto.min.js')
    }
  },
  module: {
    rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src'), resolve('test')]
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    },
    {
      test: resolve('src/assets/js/zepto.min.js'),
      loader: 'exports-loader?window.$!script-loader'
    }
    ]
  }
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = vuxLoader.merge(webpackConfig,
  {plugins:['vux-ui']}
)



/*  plugins: [
    new webpack.ProvidePlugin({
      "$": resolve('src/assets/js/zepto.min.js'),
      "Zepto": resolve('src/assets/js/zepto.min.js'),
      "window.Zepto": resolve('src/assets/js/zepto.min.js')
    })
  ]*/