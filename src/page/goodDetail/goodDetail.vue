<template>
	<div id="goodDetail">
		 <header>
	    <a @click="back" class="goodDetailBack"><</a>
	    商品详情
	    </header>
	    <div class="goodDetailBody">
		<div class="goodDetailBaner">
			 <swiper loop  :list="imglist"></swiper>	
		</div>
		<div class="goodDetailMsg">
			<span class="goodDetailTitle">{{dataItem.goodsType}}</span>
			<span class="goodDetailMoney">￥{{dataItem.price}}</span>
		</div>
		<p class="goodDetailB">包邮</p>
    <p class="discribe">描述:&nbsp;&nbsp;{{dataItem.goodsName}}</p>
		<div class="goodDetailMsgItem">
			<img :src="baseURI+dataItem.imgUrl" alt="" >
		</div>
		<div class="goodDetailCollect" @click="collect(dataItem.goodsId)">￥{{dataItem.price}} | 加入到购物车</div>
		</div>
	</div>
</template>

<script >
import { Swiper } from 'vux'
var params;
 export default {
 	components:{Swiper},
 	name:'goodDetail',
 	data () {
 		return {
 			title:'零食',
 			price:'169',
 			imglist:[],
      baseURI:'../../static/picture/',
      dataItem:{}
 		}
 	},
  methods:{
    collect:function (goodsId){
      var self = this;
      this.$http.get('api/goods/collect',{
        params:{
          goodsId:goodsId
        }
      }).then(function (results){
        if(results.data){
            self.$router.push('shop');
        } else {
         self.$router.push('login');
        }
      })
    },
    back:function(){
      this.$router.go(-1);
    }
  },
  mounted:function(){
    var self = this;
    params = geturl(window.location.search);
    this.$http.get('api/goods/goodsDetail',{
      params:{
        goodsId:params.goodsid
      }
    }).then(function (results) {
      self.dataItem = results.data[0];
      var img =
      self.imglist.push({
        img:'../../static/picture/'+results.data[0].imgUrl
      });
    })
  }
 }

 //分解url
 var geturl = function (url){
   var p = {};
   var arr = url.substring(1).split('&');
     for(var i = 0;i < arr.length;i++){
        var a = arr[i].split("=");
        p[a[0]] = a[1];
     }
   return p
 }
</script>

<style lang="less">
  header{
  	position: fixed;
  	top:0;
  	z-index: 99999;
  	height: 2.5rem;
  	width: 100%;
  	line-height: 2.5rem;
  	background:#ccc;
  	color: white;
  }
  .goodDetailBack{
  	float: left;
  }
  .goodDetailBody{
  	margin-top: 2.5rem;
  }
 .goodDetailMsg{
 	padding: 0.25rem 0.75rem;
 	&:after{
 		clear: both;
 	}
 }
 .goodDetailTitle{
 	float: left;
 	font-size: 16px;
 	color:#999;
 }
 .goodDetailMoney{
 	float: right;
 	color: #ff6600;
 }
 .goodDetailB{
 	margin: 0.75rem 0.75rem;
 	clear: both;
 	text-align: right;
 	border-top: 1px solid #ddd;
 }
 .discribe{
  text-align: left;
  margin-left: 0.5rem;
 }
 .goodDetailMsgItem{
  margin: 0.5rem;
 	>img{
 		width: 100%;
 		border-radius: 5px;
 	}
 }
 .goodDetailCollect{
 	width: 100%;
 	height: 2.5rem;
 	position: fixed;
 	bottom: 0;
 	background: black;
 	color: white;
 	line-height: 2.5rem;
 	border-radius: 5px;
 }
	
</style>