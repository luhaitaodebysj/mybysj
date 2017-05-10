<template>
	<div id="goodDetail">
		<div class="goodDetailBaner">
			 <swiper loop  :list="imglist"></swiper>	
		</div>
		<div class="goodDetailMsg">
			<span class="goodDetailTitle">{{title}}</span>
			<span class="goodDetailMoney">￥{{price}}</span>
		</div>
		<p class="goodDetailB">包邮</p>
		<div class="goodDetailMsgItem">
			<img :src="item.img" alt="" v-for="item in imglist">
		</div>
		<div class="goodDetailCollect">￥{{price}} | 加入到购物车</div>
	</div>
</template>

<script >
import { Swiper } from 'vux'
const baseList = [{
  url: 'http://m.baidu.com',
  img: 'https://static.vux.li/demo/1.jpg'
}, {
  url: 'http://m.baidu.com',
  img: 'https://static.vux.li/demo/2.jpg'
}, {
  url: 'jhttp://m.baidu.com',
  img: 'https://static.vux.li/demo/3.jpg'
}]
 export default {
 	components:{Swiper},
 	name:'goodDetail',
 	data () {
 		return {
 			title:'零食',
 			price:'169',
 			imglist:baseList

 		}
 	},
 }
	
</script>

<style scoped lang="less">
  #goodDetail{
     margin: 0.5rem;
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
 .goodDetailMsgItem{
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