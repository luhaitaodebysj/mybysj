<template>
	<div class="footbar">
	    <tabbar>
      <tabbar-item selected show-dot link="home">
        <img slot="icon" src="../../static/imags/home1.png" >
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item  link="shop">
        <img slot="icon" src="../../static/imags/shopping1.png" >
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item badge="2" link="personal">
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
  	 data () {
  	 	return {
  	 		selected:"主页",
  	 		paddingTab:'padding-tab'
  	 	}
  	 }

  }
	
</script>

<style lang="less" scoped>
  .footbar{
  	width: 100%;
  	bottom: 2px;
    height: 53px;
  }
</style>