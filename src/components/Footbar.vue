<template>
	<div class="footbar">
	    <tabbar v-model="index">
      <tabbar-item  link="home">
        <img slot="icon" src="../../static/imags/home1.png" >
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item  link="shop">
        <img slot="icon" src="../../static/imags/shopping1.png" >
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item  link="personal">
        <img slot="icon" src="../../static/imags/my1.png" >
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
</div>
</template>

<script type="text/javascript">
import { Tabbar , TabbarItem} from 'vux'
  export default {
     components:{ Tabbar , TabbarItem },
     props:{
      index:{
      type:Number,
      default:0
     }
     },
  	 data () {
  	 	return {
  	 		selected:"主页",
  	 		paddingTab:'padding-tab',
  	 	}
  	 }

  }
	
</script>

<style lang="less" scoped>
  .footbar{
  	width: 100%;
    height: 53px;
    position: fixed;
    bottom: 0;
  }
</style>