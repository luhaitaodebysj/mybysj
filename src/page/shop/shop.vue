<template>
	<div id="shop">
	    <div class="shopTitle">购物车</div>
	    <div id="shopList">
	    	<div class="shopList" v-for="item in items">
	    		<div class="shopListBox">
	    			<div class="shoppingImg">
	    				<img :src="baseURI+item.imgUrl">
	    			</div>
	    			<div class="shoppingDetail">
	    				<ul>
	    					<li class="shoppingDetailName">{{item.goodsName}}</li>
	    					<li></li>
	    					<li class="shoppingDetailNum">    
	    						<span>数量：x{{item.num}}</span>
	    						<span>￥{{item.goodsPrice}}</span>
	    					</li>
<!-- 	    					<li>
	    						<div class="reduce" v-on:click="reduce">-</div>
	    						<input type="text" class="num" v-model="goodsNum">
	    						<div class="add" v-on:click="add">+</div>
	    					</li> -->
	    				</ul>
	    			</div>		
	    		</div>
	    </div>
	    </div>

	    <div class="shopSurePay" v-if="items.length>0">
	    	<div class="shopSurePayLeft">
	    		<p>共<i>{{ totalNum}}</i>件商品</p>
	    		<p>总计￥<i>{{totalMoney}}</i>元</p>
	    	</div>
	    	<div class="shopSurePayRight" @click="confirm">
	    		提交订单
	    	</div>
	    </div>
	    <footbar v-bind:index="index"></footbar>
	</div>
</template>
<script type="text/javascript">
import Footbar from '../../components/Footbar.vue'
//初始化页面高度
function setHeight() {
	var height=$(window).height()-153;
	$("#shopList").css('height',height);
}
export default {
  name:'shop',
  components:{Footbar},
  data () {
    return {
      selected:"主页",
      title:'数量',
      baseURI:'../../static/picture/',
      index:1,
      items:[],
      totalNum:0,
      totalMoney:0,
      goodsId:0,
    }
  },
  methods:{
     reduce:function(){
     if(this.goodsNum>0){
     	this.goodsNum--;
     } else {
        this.goodsNum=0;
        alert('最小数字为0');
     }
     },
     add:function(){
        this.goodsNum++;
     },
     confirm:function() {
     	//提交订单
     	var self = this;
     	this.$http.post('api/order/create',{
     		totalPrice:self.totalMoney,
     		totalNum:self.totalNum,
     		goodsId:self.goodsId,
     		orderList:[]
     	}).then(function (results){
            self.$router.push("order");
     	})
     }
  },
  created:function() {
  },
  mounted:function() {
  	//当元素渲染出来后
  	setHeight();
  	var self = this;
  	this.$http.get('api/goods/shop').then(function (results){
  		self.items = results.data;
  		for(var i = 0;i < self.items.length;i++){
  			self.totalNum += self.items[i].num;
  			self.totalMoney +=  self.items[i].num*self.items[i].goodsPrice;
  			self.goodsId = self.items[i].goodsId;
  		}
  	}).catch(function (error){
  		console.log(error);
  	})
  }
}
</script>

<style lang="less" scoped>
ul,li{
	list-style-type: none;
	padding: 0;
	margin: 0;
}   

	#shop{
		width:100%;
		height:100%;
		position: relative;
	}
	#shopList{
		overflow: scroll;
	}
	.shopTitle{
		width: 100%;
		text-align: left;
		padding: 0.75rem;
		color: #333;
		font-weight: 600;
		background-color: white;
	}
	.shopList{
		padding:0.75rem;
	}
	.shopListBox{
		width: 100%;
		height: 7rem;
		padding: 0.5rem 0;
		border-radius: 4px;
		border:1px solid  #ddd;

	}
	.shoppingImg{
		float: left;
		width: 6rem;
		height: 6rem;
		margin-right: 0.75rem;
		>img{
			width: 100%;
			height: 100%;
		}
	}
	.shoppingDetail{
		height: 6rem;
		margin-left: 6.75rem;
		li{
			height: 1.5rem;
			line-height: 1.5rem;
			color: #575757;
		}
	}
	.shoppingDetailName{
		text-align: left;
	}
	.shoppingDetailNum{
		span{
			display: inline-block;
			height: 100%
		}
		span:nth-child(1){
			float: left;
		}
		span:nth-child(2){
			margin-right: 0.5rem;
			float: right;
			font-size: 15px;
			color: #b7b8b7;
		}
	}
	.shopSurePay{
		position: fixed;
		height: 2.5rem;
		width: 100%;
		background-color: white;
		bottom: 53px;
		padding: 0.5rem;
	}
	.shopSurePayLeft{
		display: inline-block;
		float: left;
		p{
			margin: 0;
			font-size: 12px;
			text-align: left;
			i{
				color: #ff6600;
			}
		}

	}
	.shopSurePayRight{
		display: inline-block;
		float: right;
		width: 5rem;
		height: 100%;
		background-color: black;
		color:white;
		border-radius: 4px;
		line-height: 40px;
		margin-right:1rem;
	}
	.reduce,.add{
		width:30px;
		height:30px;
		float:left;
		background:#EDEDED;
		line-height:26px;
		border:1px solid #CCCCCC;
	}
	.num{
		width:30px;
		height:30px;
		float:left;
		border:1px solid #CCCCCC;
		border-left: none;
		border-right: none;
		text-align: center;
	}
</style>