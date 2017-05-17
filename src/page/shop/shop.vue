<template>
	<div id="shop">
	    <div class="shopTitle">购物车</div>
	    <div id="shopList">
	    	<div class="shopList" v-for="item in items">
	    		<div class="shopListBox">
	    			<div class="shoppingImg">
	    				<img :src="item.imgurl">
	    			</div>
	    			<div class="shoppingDetail">
	    				<ul>
	    					<li class="shoppingDetailName">{{item.title}}</li>
	    					<li></li>
	    					<li class="shoppingDetailNum">    
	    						<span>数量：x{{item.num}}</span>
	    						<span>￥{{item.money}}</span>
	    					</li>
	    					<li>
	    						<div class="reduce" v-on:click="reduce">-</div>
	    						<input type="text" class="num" v-model="goodsNum">
	    						<div class="add" v-on:click="add">+</div>
	    					</li>
	    				</ul>
	    			</div>		
	    		</div>
	    </div>
	    </div>

	    <div class="shopSurePay">
	    	<div class="shopSurePayLeft">
	    		<p>共<i>16</i>件商品</p>
	    		<p>总计￥<i>116.0</i>元</p>
	    	</div>
	    	<div class="shopSurePayRight">
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
      totalMoney:0,
      goodsNum:0,
      title:'数量',
      index:1,
      items:[{
      	imgurl:'../../../static/imags/book/java.jpg',
      	title:'自行车',
      	num:7,
      	money:555.00
      },{
      	imgurl:'../../../static/imags/book/java.jpg',
      	title:'自行车',
      	num:7,
      	money:555.00
      },{
      	imgurl:'../../../static/imags/book/java.jpg',
      	title:'自行车',
      	num:7,
      	money:555.00
      },{
      	imgurl:'../../../static/imags/book/java.jpg',
      	title:'自行车',
      	num:7,
      	money:555.00
      },{
      	imgurl:'../../../static/imags/book/java.jpg',
      	title:'自行车',
      	num:7,
      	money:555.00
      },{
      	imgurl:'../../../static/imags/book/java.jpg',
      	title:'自行车',
      	num:7,
      	money:555.00
      }]
    }
  },methods:{
     reduce:function(){
     	this.goodsNum--;
     },
     add:function(){
        this.goodsNum++;
     }
  },
  created:function() {
  },
  mounted:function() {
  	//当元素渲染出来后
  	setHeight();
  }
}
 setHeight();
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
		height: 2.5rem;
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
		height: 7.5rem;
		border-radius: 4px;
		border:1px solid  #ddd;
		padding: 0.75rem;

	}
	.shoppingImg{
		float: left;
		width: 6rem;
		height: 6rem;
		margin-right: 0.75rem;
		>img{
			width: 100%;
		}
	}
	.shoppingDetail{
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
		line-height: 30px;
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