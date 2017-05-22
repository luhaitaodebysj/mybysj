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
			  	 	{{item.STATUS ==1?"出售中":'已下架'}}
			  	 </li>
			  </ul>
			</div>
		</div>
	</div>
	</div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                items:[]
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
	
</style>