<template>
	<div id="putGoodsList">
	<div class="header">
	  <a href="personal" class="back"><</a>
	  <p>我的上架商品</p>
	</div>
	<div class='goods'>
		<div class="goodsDetail" v-for='item in items'>
			<div class="img">
				<img :src="'../../static/picture/'+item.imgUrl">
			</div>
			<div class="content">
			  <ul>
			  	 <li>{{item.goodsType}}</li>
			  	 <li>{{item.goodsName}}</li>
			  	 <li>
			  	 	<span class="price">￥{{item.price}}</span>
			  	 	<span class='inventory'>X{{item.inventory}}</span>
			  	 </li>
			  	 <li class="status">
			  	 	 <span>{{item.STATUS ==1?"出售中":'已售罄'}}</span>
			  	 	 <span class='goodsOperate' @click="undercarriage(item,$event)">{{item.STATUS | formatStatus}}</span>
			  	 </li>
			  </ul>
			</div>
		</div>
	</div>
		<toast v-model="showT" type="text" :time="1000" is-show-mask v-bind:text="toastText"></toast>
	</div>

</template>

<script type="text/javascript">
import {Toast} from  'vux'
import Vue from 'vue'
    export default {
    	components:{Toast},
        data () {
            return {
                items:[],
                toastText:'',
                showT:false
            }
        },
        methods:{
          undercarriage:function(item,event){
          	var self = this; 
             if(item.STATUS == 1){
             	//下架商品
             	this.toastText = '下架成功';
             	this.showT = true;
             }
             if(item.STATUS == 2){
             	this.toastText = '发货成功';
                this.showT = true;
                $(event.target).text("已发货");
                this.$http.get('api/order/delivery',{
                	params:{
                		goodsId:item.goodsId
                	}
                }).then(function (results){
                	
                })
             }
             if( item.STATUS ==3){

             }
          }	
        },
        mounted: function () {
        	var self = this;
            this.$http.get('api/goods/goodsList').then(function (results) {
                  self.items = results.data;
                  console.log(results.data);
            }).catch(function (error) {
            	console.log(error);
            })
        }
    }
 //过滤器
 Vue.filter('formatStatus',function (status){
 	var text ='';
   if(status == 1){
     text = "下架";
   }
   if( status == 2){
   	text ="发货";
   }
   if( status == 3){
   	text ='已发货';
   }
   return text;
 })  
</script>

<style scoped lang="less">
.header{
	height: 2rem;
	line-height: 2rem;
	margin: 0.5rem;
	position: relative;
	border-bottom: 1px solid #ddd;
}
.back{
	position: absolute;
	left: 0;
}
.goods{
	margin: 0.5rem;
}
.goodsDetail{
	display: flex;
	margin: 0.5rem;
}
.img{
  flex:4;
  height: 6rem;
  >img{
  	width: 90%;
  	height: 100%;
  }
}
.content{
	flex:7;
	ul,li{
		padding: 0;
		margin: 0;
		list-style-type: none;
		text-align: left;
		font-size: 15px;
	}
}
.inventory{
	float:right;
	margin-right: 1rem;
}
.status{
	color: #ff6600;
}
.goodsOperate{
	float: right;
}
	
</style>