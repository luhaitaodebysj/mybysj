<template>
	<div id="shop">
	    <div class="shopTitle">购物车</div>
	    <div class="shopList">
	    	<div class="shopListBox">
	    	  <div class="shoppingImg">
	    	  	<img src="">
	    	  </div>
      	      <div class="shoppingDetail">
      	      	 <ul>
      	      	 	<li class="shoppingDetailName">自行车</li>
      	      	 	<li></li>
      	      	 	<li></li>
      	      	 	<li></li>
      	      	 </ul>
      	      </div>		
	    	</div>
	    </div>
	</div>
</template>
<script type="text/javascript">
export default {
  name:'shop',
  data () {
    return {
      selected:"主页"
    }
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
	}
	.shoppingDetail{
		float: left;
	}

</style>