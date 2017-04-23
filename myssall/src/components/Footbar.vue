<template>
	<div class="footbar">
		<mt-navbar v-model="selected" >
		    <mt-tab-item :id="item.name" :value="item.name" v-for="item in items" :key="item.id" :class="paddingTab">
		    <img slot="icon" :src="item.icon">
		    {{item.name}}
		    </mt-tab-item>
        </mt-navbar>
</div>
</template>

<script type="text/javascript">
  export default {
  	 name:'footbar',
  	 data () {
  	 	return {
  	 		selected:"主页",
  	 		paddingTab:'padding-tab',
  	 		items:[{
  	 			id:1,
  	 			name:'主页',
  	 			icon:"../../static/imags/home1.png"
  	 		},{
  	 			id:2,
  	 			name:"购物车",
  	 			icon:"./../static/imags/shopping1.png"
  	 		},
  	 		{
  	 			id:3,
  	 			name:'我的',
  	 			icon:"./../static/imags/my1.png"
  	 		}]
  	 	}
  	 }

  }
	
</script>

<style lang="less" scoped>
  .footbar{
  	width: 100%;
  	bottom: 2px;
  }
  .padding-tab{
  	padding: 0.25rem 0;
  } 
  .footbar .mint-navbar .mint-tab-item.is-selected{
     color: #f53333;
  }
</style>